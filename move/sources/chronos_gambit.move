module message_board_addr::chronos_gambit{
  use aptos_std::math64;
  use aptos_std::math128::{log2_64};
  use aptos_std::math_fixed64::{exp, mul_div};
  use aptos_std::fixed_point64::{FixedPoint64, create_from_rational, get_raw_value, add, sub};
  use aptos_framework::object::{Self, ExtendRef};
  use std::debug;
  use std::vector;
  use std::signer;
  use std::timestamp; 
  use std::option::{Self, Option};
  use message_board_addr::usdc;

  // Constants
  // status 
  const IN_PROGRESS: u8 = 0;
  const FINISHED: u8 = 1;

  // result
  const OPTION1: u8 = 0;
  const OPTION2: u8 = 1;
  const DRAW: u8 = 2;

  // errors
  const ENOT_ADMIN: u64 = 0;
  const ENOT_INITIALIZED: u64 = 1;
  const ENOT_VALID_OPTION: u64 = 2;

  // Share Decimals
  const SHARE_DECIMALs: u8 = 4;

  // Structs
  #[resource_group_member(group = aptos_framework::object::ObjectGroup)]
  struct ObjectController has key {
    extend_ref: ExtendRef
  }

  struct Status has copy, drop, store{
    value: u8
  }

  struct Result has copy, drop, store{
    value: u8
  }

  // market Related
  struct MarketCounter has key, copy, drop {
		value: u64,
	}

  struct PredictionMarketMetaData has key, copy, drop {
		id: u64,
		question: vector<u8>,
		option1: vector<u8>,
		option2: vector<u8>,
    sharesPerOption: u64,
    k: u64,
		createdAt: u64,
		status: u8,
		result: Option<u8>
	}

  struct VAMM has key, copy, drop {
		optionShares1: u64,
    optionShares2: u64,
	}
  
  // Init Fn
  fun init_module(admin: &signer) {
		let counter = MarketCounter { value: 0 };
    move_to(admin, counter);
  }

  // View Fn
  #[view]
  public fun get_market_metadata(market_id: u64): (PredictionMarketMetaData, VAMM) acquires MarketCounter, PredictionMarketMetaData, VAMM {
    // Get counter and check if the market with the market_id is initialized
    let market_count = get_market_count();
    assert!(market_count > market_id, ENOT_INITIALIZED);

    let market_address = get_market_address(market_id);

    // Get the metadata
    (*borrow_global<PredictionMarketMetaData>(market_address), *borrow_global<VAMM>(market_address))
  }

  #[view]
  public fun get_market_address(market_id: u64): address {
    // Create seed from market_id
    object::create_object_address(&@message_board_addr, u64_to_vec_u8(market_id))
  }

  #[view]
  public fun get_market_count(): u64 acquires MarketCounter {
    // get market count
    borrow_global<MarketCounter>(@message_board_addr).value
  }

  // Public Fn
  public entry fun buy_shares(
    user: &signer,
    market_id: u64,
    option: u8,
    shares: u64,
  ) acquires MarketCounter, PredictionMarketMetaData, VAMM {
    // Check option provided
    assert!(option < 2, ENOT_VALID_OPTION);

    // Get market data
    let (prediction_market_metadata, vAMM) = get_market_metadata(market_id);

    // Get object
    let market_address = get_market_address(market_id);

    // Get Price
    // Todo: edit this later
    let price = 5 * math64::pow(10, 6);
    usdc::transfer(user, market_address, price);

    // ToDo: Increase and decrease the token amounts
    
  }

  public entry fun init_market(
    admin: &signer, 
    question: vector<u8>, 
    option1: vector<u8>, 
    option2: vector<u8>, 
    sharesPerOption: u64,
  ) acquires MarketCounter {
    let admin_address = signer::address_of(admin);
    assert!(admin_address == @message_board_addr, ENOT_ADMIN);

    // Get the market counter
    let counter = &mut borrow_global_mut<MarketCounter>(@message_board_addr).value;

    // Creates a non-deletable object with counter as the seed
    let constructor_ref = &object::create_named_object(admin, u64_to_vec_u8(*counter));

    // Create an extend ref for the object and move it to the object
    let object_signer = object::generate_signer(constructor_ref);
    let extend_ref = object::generate_extend_ref(constructor_ref);

    // Move ExtendRef and VAMM struct to the object
    move_to(&object_signer, ObjectController { extend_ref });
    move_to(&object_signer, VAMM {optionShares1: sharesPerOption, optionShares2: sharesPerOption});
    move_to(&object_signer, PredictionMarketMetaData{
      id: *counter,
      question: question,
      option1: option1,
      option2: option2,
      sharesPerOption: sharesPerOption,
      k: sharesPerOption*2,
      createdAt: timestamp::now_seconds(),
      status: IN_PROGRESS,
      result: option::none<u8>()
    });

    // Increment the counter
    *counter = *counter + 1;
  } 

  // Internal Fn
  fun u64_to_vec_u8(value: u64): vector<u8> {
    let bytes = vector::empty<u8>();
    let i = 8;
    while (i > 0) {
      i = i - 1;
      vector::push_back(&mut bytes, (((value >> (i * 8)) & 0xFF) as u8));
    };

    // Remove leading zeros
    while (vector::length(&bytes) > 1 && *vector::borrow(&bytes, 0) == 0) {
      vector::remove(&mut bytes, 0);
    };

    bytes
  }

  fun pricing_function(q1: u128, q2: u128, b:u128): FixedPoint64{
    let b_fixed = create_from_rational(b, 1);
    let q1_fixed = create_from_rational(q1, 1);
    let q2_fixed = create_from_rational(q2, 1);
    let one = create_from_rational(1, 1);
  
    let exp_1 = exp(mul_div(q1_fixed, one, b_fixed));
    let exp_2 = exp(mul_div(q2_fixed, one, b_fixed));

    let sum = add(exp_1, exp_2);
    let ln_sum = ln(sum);

    let result = mul_div(b_fixed, ln_sum, one);
    result
  }

  fun round_to_6_decimals(x: FixedPoint64): u64{
    let six_decimals = 1000000;
    let scaled_part = (get_raw_value(x) * six_decimals) >> 64;
    (scaled_part as u64)
  }

  fun ln(x: FixedPoint64):FixedPoint64 {
    let ln2 = create_from_rational(693147, 1000000);
    let one = create_from_rational(1, 1);
    let raw_value = get_raw_value(x);

    // fixed_point64::create_from_raw_value(result);
    let logx = sub(log2_64(raw_value), create_from_rational(64, 1));
    let lnx = mul_div(logx, ln2, one);
    lnx
  }

  #[test]
  fun test_ln() {
    let tolerance = create_from_rational(1, 10000); // 0.0001 tolerance for equality checks

    // let x = fixed_point64::create_from_rational(8123232322, 1000);
    // let result = ln(x);
    // debug::print<FixedPoint64>(&result);

    let x = pricing_function(10000, 10000, 250);
    debug::print<FixedPoint64>(&x);
    let y = round_to_6_decimals(x);
    debug::print<u64>(&y);

    // let x = fixed_point64::create_from_rational(1, 1);
    // let result = ln(x);
    // debug::print<FixedPoint64>(&result);
    // let expected = fixed_point64::create_from_rational(1, 100000);
    // debug::print<FixedPoint64>(&expected);
    // assert!(fixed_point64::almost_equal(result, expected, tolerance), 0);

    // let e = fixed_point64::create_from_rational(271828, 100000);
    // let result = ln(e);
    // debug::print<FixedPoint64>(&result);
    // let expected = fixed_point64::create_from_rational(1, 1);
    // debug::print<FixedPoint64>(&expected);
    // assert!(fixed_point64::almost_equal(result, expected, tolerance), 1);

    // let x = fixed_point64::create_from_rational(2, 1);
    // let result = ln(x);
    // let expected = fixed_point64::create_from_rational(69314718, 100000000);
    // assert!(fixed_point64::almost_equal(result, expected, tolerance), 2);

    // let x = fixed_point64::create_from_rational(10, 1);
    // let result = ln(x);
    // let expected = fixed_point64::create_from_rational(230258509, 100000000);
    // assert!(fixed_point64::almost_equal(result, expected, tolerance), 3);
  }
}