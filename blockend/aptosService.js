// aptosService.js

import { aptosClient } from "@/utils/aptosClient";
import { Aptos, AptosConfig} from "@aptos-labs/ts-sdk";


export const config = new AptosConfig({ network: Network.TESTNET });
export const aptos = new Aptos(config);

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
