import {Button, Center, Input} from '@chakra-ui/react'
import React, {useState} from 'react'
// @ts-ignore
import { initMarket , getMarketCount, getMarketMetadata} from "../../../blockend/aptosService"; 

import {  Network } from "aptos";
import { Account, Aptos, AptosConfig, U64} from "@aptos-labs/ts-sdk";
import {
  useWallet,
} from "@aptos-labs/wallet-adapter-react";
type Props = {}

// const client = new AptosClient("https://fullnode.devnet.aptoslabs.com");

function AdminForm({}: Props) {

    const acc = Account.generate();
    const { account, signAndSubmitTransaction } = useWallet();

    const config = new AptosConfig({ network: Network.TESTNET });
    const aptos = new Aptos(config);


    const [formData, setFormData] = useState({
		question: "",
        imageURL:"",
        description:"",
        firstShareOption:"",
        secondShareOption:"",
        liquidityParameter:0
	})


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}))

        console.log("acc: " , acc);
	}

    const moduleAddress = "0x8d5e69b7d4c7203af95e5a13a4d734792930e76f578dcaa5ffa73cbb393e7a3e";



    const handleSubmit = async (e:any) => {
        e.preventDefault();

         if (!account) {
            console.error("Account not available");
            return;
        }

        //  await aptos.transaction.build.simple({
        //     sender: account.address ?? "",
        //     data: {
        //       function: `${moduleAddress}::chronos_gambit::init_market`,
        //       typeArguments: [],
        //       functionArguments: [

        //         formData.question,
        //         formData.imageURL,
        //         formData.description, 
        //         formData.firstShareOption, 
        //         formData.secondShareOption, 
        //         new U64(formData.liquidityParameter)
        //        ],
        //     },
        // });


        // const value = await client.getAccountResources(moduleAddress);
        // console.log(value);

  
        if(account){
                const committedTxn = await signAndSubmitTransaction({  data: {
                 function: `${moduleAddress}::chronos_gambit::init_market`,
                 typeArguments: [],
                 functionArguments: [formData.question, formData.imageURL, formData.description, formData.firstShareOption, formData.secondShareOption, formData.liquidityParameter],
            }, });
                await aptos.waitForTransaction({ transactionHash: committedTxn.hash });
                console.log(`Committed transaction: ${committedTxn.hash}`);
        }else{
            console.log("Account not available");
        }

        // await aptos.transaction.build.simple({
        //     sender: account.address ?? "",
        //     data: {
        //       function: `${moduleAddress}::chronos_gambit::buy_shares`,
        //       typeArguments: [],
        //       functionArguments: [

        //         new U64(0),
        //         new U64(0),
        //         new U64(10),
        //        ],
        //     },
        // });

        
        // if(account){
        //         const committedTxn = await signAndSubmitTransaction({  data: {
        //          function: `${moduleAddress}::chronos_gambit::buy_shares`,
        //          typeArguments: [],
        //          functionArguments:[ 0,0,10],
        //     }, });
        //         await aptos.waitForTransaction({ transactionHash: committedTxn.hash });
        //         console.log(`Committed transaction: ${committedTxn.hash}`);
        // }else{
        //     console.log("Account not available");
        // }

    
    
        
    }

//     const addNewList = async () => {
//   if (!account) return [];

//   const transaction:InputTransactionData = {
//       data: {
//         function:`${moduleAddress}::initMarket::chronos_gambit`,
//         functionArguments:[]
//       }
//     }
//   try {
//     // sign and submit transaction to chain
//     const response = await signAndSubmitTransaction(transaction);
//     // wait for transaction
//     await aptos.waitForTransaction({transactionHash:response.hash});
//   } catch (error: any) {
//   } finally {
//   }
// };
  return (
    <>
    <Center className="font-jbm" width={"50%"} bgColor={"white"} padding={"20px"} borderRadius={"10px"} boxShadow={"2xl"}>
    <form onSubmit={handleSubmit}>
									
        <label htmlFor="question">Question</label>
		<Input
			required
			type="text"
			marginBottom="20px"
			marginTop="2px"
			name="question"
			placeholder="Prediction Question"
			value={formData.question}
			onChange={handleInputChange}
		/>

        <label htmlFor="imageURL">Image URL</label>
		<Input
			required
			type="text"
			marginBottom="20px"
			marginTop="2px"
			name="imageURL"
			placeholder="Add Image URL"
			value={formData.imageURL}
			onChange={handleInputChange}
		/>

        <label htmlFor="description">Description</label>
		<Input
			required
			type="text"
			marginBottom="20px"
			marginTop="2px"
			name="description"
			placeholder="Add Description"
			value={formData.description}
			onChange={handleInputChange}
		/>

		<label htmlFor="firstShareOption">Prediction Option - 1</label>
		<Input
			type="text"
			marginBottom="25px"
			marginTop="2px"
			placeholder="Prediction Option"
			name="firstShareOption"
			value={formData.firstShareOption}
			onChange={handleInputChange}
			required={true}
		/>

   
        <label htmlFor="secondShareOption">Prediction Option - 2</label>
		<Input
			type="text"
			marginBottom="20px"
			marginTop="2px"
			placeholder="Prediction Option"
			name="secondShareOption"
			value={formData.secondShareOption}
			onChange={handleInputChange}
			required
		/>

    

        <label htmlFor="liquidityParameter">Liquidity Parameter</label>
		<Input
			type="number"
			marginBottom="20px"
			marginTop="2px"
			placeholder="Liquidity Parameter"
			name="liquidityParameter"
			value={formData.liquidityParameter}
			onChange={handleInputChange}
		/>
		    <Button type="submit" colorScheme='green'>Submit</Button>

			
        </form>
    </Center>

    </>
  )
}

export default AdminForm