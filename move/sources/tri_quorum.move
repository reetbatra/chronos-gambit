// module message_board_addr::tri_quorum{
//   use aptos_std::math64;
//   use aptos_framework::timestamp;
//   use aptos_std::math128::{log2_64};
//   use aptos_std::math_fixed64::{exp, mul_div};
//   use aptos_std::table::{Self, Table};
//   use aptos_std::fixed_point64::{FixedPoint64, create_from_rational, get_raw_value, add, sub};
//   use aptos_framework::object::{Self, ExtendRef};
//   use std::debug;
//   use std::vector;
//   use std::signer;
//   use std::option::{Self, Option};
//   use message_board_addr::usdc;

//   // Constants
//   // status 
//   const EINVALID_NO_SIGNERS: u8 = 0;

//   // structs
//   // Structs
//   #[resource_group_member(group = aptos_framework::object::ObjectGroup)]
//   struct ObjectController has key {
//     extend_ref: ExtendRef
//   }

//   struct SignerData has key {
//     signers: vector<address>,
//     is_signer_whitelisted: Table<address, bool>
//   }

//   // Init Fn
//   // fun init_module(admin: &signer, signers: vector<address>) {
// 	// 	// assert!(vector::length<address>(&signers) == 5, EINVALID_NO_SIGNERS);
    
//   //   // Creates a non-deletable object
//   //   let constructor_ref = &object::create_named_object(admin, b"triquorum");

//   //   // Create an extend ref for the object and move it to the object
//   //   let object_signer = object::generate_signer(constructor_ref);
//   //   let extend_ref = object::generate_extend_ref(constructor_ref);

//   //   // Move ExtendRef and LMSR struct to the object
//   //   move_to(&object_signer, ObjectController { extend_ref });
    
//   //   // Initialize is_signer_whitelisted table
//   //   let is_signer_whitelisted = table::new<address, bool>();
//   //   let i = 0;
//   //   let len = vector::length(&signers);
//   //   while (i < len) {
//   //     let signer_address = *vector::borrow(&signers, i);
//   //     table::add(&mut is_signer_whitelisted, signer_address, true);
//   //     i = i + 1;
//   //   };

//   //   // Move SignerData struct to the object
//   //   move_to(&object_signer, SignerData {
//   //     signers: signers,
//   //     is_signer_whitelisted: is_signer_whitelisted
//   //   });
//   // }
// }
