import { Grid } from "@chakra-ui/react";
import BetCard from "./BetCard";
import { useEffect, useState} from "react";
import { Aptos, AptosConfig, InputViewFunctionData, U64} from "@aptos-labs/ts-sdk";
import {  Network } from "aptos";
import {useWallet} from "@aptos-labs/wallet-adapter-react";
import { getMarketCount, getMarketMetadata} from "../../blockend/aptosService";


 const config = new AptosConfig({ network: Network.TESTNET });
 const aptos = new Aptos(config);


const Marketplace = () => {

    const {account} = useWallet();
    const [marketCount, setMarketCount] = useState(0);
    const [bets, setBets] = useState<any[]>([]);
    const moduleAddress = "0x8d5e69b7d4c7203af95e5a13a4d734792930e76f578dcaa5ffa73cbb393e7a3e";

    


  useEffect(() => {

    const fetchBets = async () => {

        setBets([]);
        getMarketCount().then((m:any) => {
                   let marketCount = m;
                   for(let i = 0; i < marketCount; i++){
                     getMarketMetadata(i).then((m:any) => {
                        if(m[0].status==0)
                       setBets((prevBets) => [...prevBets, m[0]]);
                       console.log("m", m);
                     });
                     }

             })        
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
