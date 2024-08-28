// aptosService.js

import { aptosClient } from "@/utils/aptosClient";
import { Aptos, AptosConfig} from "@aptos-labs/ts-sdk";


export const config = new AptosConfig({ network:"testnet" });
export const aptos = new Aptos(config);

const moduleAddress  = "0x9dae74c3df3e6bcf432d55b97ce26681eded52103d2a109163a1435912ce6271";

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
