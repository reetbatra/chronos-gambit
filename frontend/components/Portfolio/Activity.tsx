import {Aptos, AptosConfig} from "@aptos-labs/ts-sdk";
import {useWallet} from '@aptos-labs/wallet-adapter-react';
import
    {
        Button,
        Table,
        TableCaption,
        TableContainer,
        Tbody,
        Td,
        Th,
        Thead,
        Tr,
    } from '@chakra-ui/react';
import {Network} from "aptos";
import {useEffect, useState} from 'react';
import {getMarketMetadata, getUserMarketData} from "../../../blockend/aptosService";


type Props = {};

const tradeData = [
    {
        id: "1",
        activity: "Buy",
        question: "Who will be new president of USA?",
        questionOption: "Donald Trump",
        totalShares: 13,
        totalPrice: "24.78",
    }
];

function Activity({}: Props) {

     function hexToAscii(hex:any) {
        let str = '';
        for (let i = 2; i < hex.length; i += 2) {
            str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        }
        return str;
    }

    const {account, signAndSubmitTransaction} = useWallet()
    const [bet, setBet] = useState<any>(null); // State to hold the bet data
    const [lmsr, setLmsr] = useState<any>(null);
    const [bets, setBets] = useState<any>(null);
    const [userMarketData, setUserMarketData] = useState<any>(null);

    const config = new AptosConfig({ network: Network.TESTNET });
    const aptos = new Aptos(config);
    const moduleAddress = "0x8d5e69b7d4c7203af95e5a13a4d734792930e76f578dcaa5ffa73cbb393e7a3e";


     useEffect(() => {
        const fetchBets = async () => {

            if (!account) return; // Ensure account is available

            const userData = await getUserMarketData(account?.address);
            console.log("User Data:", userData[0].length);

            const updatedUserMarketData = [];

            for (let i = 0; i < userData[0].length; i++) {
                console.log(i)
                const marketMetadata = await getMarketMetadata(i);
                console.log("Market Metadata:", marketMetadata[0]);

                updatedUserMarketData.push({ userData: userData[0][i], betData: marketMetadata[0] });
            }

            setUserMarketData(updatedUserMarketData); // Update the state with the new data
        };

        fetchBets();
    }, [account]);


   useEffect(() => {
        console.log("Updated User Market Data:", userMarketData);
    }, [userMarketData]);

    const handlePayout = async (data:any) => {
        if (!account) return; // Ensure account is available
            
            if(account){
                const committedTxn = await signAndSubmitTransaction({  data: {
                 function: `${moduleAddress}::chronos_gambit::withdraw_payout`,
                 typeArguments: [],
                 functionArguments: [data?.id],
            }, });
                await aptos.waitForTransaction({ transactionHash: committedTxn.hash });
                console.log(`Committed transaction: ${committedTxn.hash}`);
        }else{
            console.log("Account not available");
        }
    }

  return (
    <div className='font-jbm'> 
      <TableContainer color={"white"} mt={10}>
        <Table variant='simple'>
          <TableCaption style={{ fontFamily: "'JetBrains Mono'" }}>Your Activity on Chrono's Gambit</TableCaption>
          <Thead>
            <Tr>
              <Th color={"white"} style={{ fontFamily: "'JetBrains Mono'" }}>Question</Th> 
              <Th color={"white"} style={{ fontFamily: "'JetBrains Mono'" }}>Amount Invested</Th>
              <Th color={"white"} style={{ fontFamily: "'JetBrains Mono'" }}>Prediction 1 - Shares Owned</Th>
              <Th color={"white"} style={{ fontFamily: "'JetBrains Mono'" }}>Prediction 2 - Shares Owned</Th> 
              <Th color={"white"} style={{ fontFamily: "'JetBrains Mono'" }}>Payout</Th> 
              
            </Tr>
          </Thead>
          <Tbody>
            {userMarketData?.map((data:any) => (
              <Tr color={"#CCCCFF"}key={data.betData?.id}>
                <Td className='font-jbm'>{hexToAscii(data?.betData?.question)}</Td> 
                <Td className='font-jbm'>{"$"}{data?.userData?.amount_invested/10**6}</Td> 
                <Td className='font-jbm'>{hexToAscii(data?.betData?.option_1)} - {data?.userData?.option_shares_1}</Td> 
                <Td className='font-jbm'>{hexToAscii(data?.betData?.option_2)} - {data?.userData?.option_shares_2}</Td> 
                <Td className='font-jbm'><Button onClick={()=>handlePayout(data?.betData)} bg={"#CCCCFF"} className=" text-black p-3 rounded-md">Withdraw</Button></Td>              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Activity;
