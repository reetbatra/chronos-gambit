// aptosService.js

import { aptosClient } from "@/utils/aptosClient";
import { Aptos, AptosConfig} from "@aptos-labs/ts-sdk";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import {  Network } from "aptos";


export const config = new AptosConfig({ network:"testnet" });
export const aptos = new Aptos(config);

const moduleAddress  = "0xdb25608306e8286889aec5ba6a2bb0b0bd0f4d5d3d589f6e51c48ee3f3be8cc1";
export async function initMarket(adminAccount, question, option1, option2, sharesPerOption) {
  const adminAddress = adminAccount;
  const payload = {
    type: 'entry_function_payload',
    function: `${adminAddress}::message_board_addr::chronos_gambit::init_market`,
    type_arguments: [],
    arguments: [question, option1, option2, sharesPerOption],
  };

  const transaction = await aptosClient.generateTransaction(adminAddress, payload);
  const signedTransaction = await adminAccount.signTransaction(transaction);
  const response = await aptosClient.submitTransaction(signedTransaction);

  return response;
}

export async function getMarketCount() {
    try{
    const payload = {
             function: `${moduleAddress}::chronos_gambit::get_market_count`,
             functionArguments: [],
        }

         const marketCount = await aptos.view({ payload})
         return marketCount;
    console.log("marketCount: ", marketCount);
  } catch (e) {
    console.error(e);
    };

}

export async function getMarketMetadata(marketId) {
    try{
    const payload = {
             function: `${moduleAddress}::chronos_gambit::get_market_metadata`,
             functionArguments: [marketId],
        }

         const marketMetadata = await aptos.view({ payload})
         return marketMetadata
  } catch (e) {
    console.error(e);
    };

}

export async function getUserMarketData(userAddress){
    try{
    const payload = {
             function: `${moduleAddress}::chronos_gambit::get_user_market_data`,
             functionArguments: [userAddress],
        }

         const marketMetadata = await aptos.view({ payload})
         return marketMetadata
  } catch (e) {
    console.error(e);
    };
    
}
