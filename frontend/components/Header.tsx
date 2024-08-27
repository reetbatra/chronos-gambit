import {useWallet} from "@aptos-labs/wallet-adapter-react";
import { WalletSelector } from "./WalletSelector";
import { Link } from 'react-router-dom';
import {aptos} from '../utils/aptosClient';
import {useEffect} from "react";

export function Header() {

  const { account} = useWallet();

// useEffect(() => {
//   const fund = aptos.getAccountInfo({ accountAddress: "0xbe78c3db211c44ff8ab479269bca429472b026751f983abfbb5b716ae12874cc"});
//   fund.then((result) => console.log("fund", result));
// }, []);

  return (
    <div style={{ backgroundColor:"#111214", display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', color:"white"}}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/logonobg.png" alt="Logo" width={40} height={40} />
        <Link to="/" style={{ zIndex:1}}><h1 className="font-jbm text-xl">Chrono's Gambit</h1></Link>
      </div>
      <div style={{ display: 'flex', justifyContent:"flex-end", width:"70%"}}>
        <Link to="/marketplace" className="font-jbm text-l" style={{marginRight:"40px", zIndex:1}}>Marketplace</Link>
        <Link to={`/portfolio/${account?.address}`}  style={{marginRight:"40px", zIndex:1}} className="font-jbm text-l">Portfolio</Link>
        <Link to="/faq" className="font-jbm text-l" style={{marginRight:"40px", zIndex:1}}>FAQ's</Link>
        <Link to="/admin" className="font-jbm text-l" style={{zIndex:1}}>Admin Dashboard</Link>

      </div>
      <div className="ml-auto">
        <WalletSelector />
      </div>
    </div>
  );
}

