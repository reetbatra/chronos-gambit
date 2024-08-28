import { Grid } from "@chakra-ui/react";
import BetCard from "./BetCard";
import { useEffect} from "react";
import {Link} from "react-router-dom";
import { Aptos, AptosConfig, InputViewFunctionData, U64} from "@aptos-labs/ts-sdk";
import {  Network } from "aptos";
import {useWallet} from "@aptos-labs/wallet-adapter-react";


 const config = new AptosConfig({ network: Network.TESTNET });
 const aptos = new Aptos(config);

const bets = [
  {
    id: "1",
    question: "Will Chrono's Gambit win the Aptos winter hackathon?",
    firstOption: "Yes",
    secondOption: "No",
  },
  {
    id: "2",
    question: "Who will win the US elections?",
    firstOption: "Kamala Harris",
    secondOption: "Donald Trump",
  },
  {
    id: "3",
    question: "Beiber baby: Boy or Girl?",
    firstOption: "Boy",
    secondOption: "Girl",
  },
  {
    id: "4",
    question: "Pavel Durov relased in August?",
    firstOption: "Yes",
    secondOption: "No",
  },
  {
    id: "5",
    question: "Will Israel invade Lebanon before September",
    firstOption: "Yes",
    secondOption: "No",
  },
  {
    id: "6",
    question: "Will Taylor Swift endorse Kamala Harris before elections?",
    firstOption: "Yes",
    secondOption: "No",
  },
];


const Marketplace = () => {

    const {account, signAndSubmitTransaction} = useWallet();

  const moduleAddress = "0xeebb9fc6364e1a7e66098f65a5160e73c442bb2b9c0b428506e4714290b30957";

  useEffect(() => {

    const fetchBets = async () => {
        try {

        const payload: InputViewFunctionData = {
             function: `${moduleAddress}::chronos_gambit::get_market_count`,
             functionArguments: [],
        }

         const marketCount = await aptos.view({ payload})
    console.log("marketCount: ", marketCount);
  } catch (e: any) {
    console.error(e);}


    };

    fetchBets();
  }, [account]);



//   useEffect(() => {

//     const buyShares = async () => {
        
//          if (!account) {
//             console.error("Account not available");
//             return;
//         }

//         await aptos.transaction.build.simple({
//             sender: account.address ?? "",
//             data: {
//               function: `${moduleAddress}::chronos_gambit::buy_shares`,
//               typeArguments: [],
//               functionArguments: [

//                 new U64(0),
//                 new U64(0),
//                 new U64(10),
//                ],
//             },
//         });

        
//         if(account){
//                 const committedTxn = await signAndSubmitTransaction({  data: {
//                  function: `${moduleAddress}::chronos_gambit::buy_shares`,
//                  typeArguments: [],
//                  functionArguments:[ 0,0,10],
//             }, });
//                 await aptos.waitForTransaction({ transactionHash: committedTxn.hash });
//                 console.log(`Committed transaction: ${committedTxn.hash}`);
//         }else{
//             console.log("Account not available");
//         }

//     }

//     buyShares();
//   }, [account]);



    


  return (
    <div style={{ minHeight: "100vh" }} className="font-jbm">
      <Grid
        mt={5}
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={8}
        alignItems={"center"}
        p={6}
      >
        {bets.map((bet) => (
            <div className="font-jbm">
                <BetCard key={bet?.id} {...bet} />
            </div>
        
        ))}
      </Grid>
    </div>
  );
};

export default Marketplace;
