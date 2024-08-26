import {useWallet} from "@aptos-labs/wallet-adapter-react";
import { WalletSelector } from "./WalletSelector";
import { Link } from 'react-router-dom';

export function Header() {

  const { account} = useWallet();
  
  return (
    <div style={{ backgroundColor:"#f5f5f5", display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/logonobg.png" alt="Logo" width={40} height={40} />
        <Link to="/"><h1 className="font-jbm text-xl">Chrono's Gambit</h1></Link>
      </div>
      <div style={{ display: 'flex', justifyContent:"flex-end", width:"70%"}}>
        <Link to="/marketplace" className="font-jbm text-l" style={{marginRight:"40px"}}>Marketplace</Link>
        <Link to={`/portfolio/${account?.address}`}  style={{marginRight:"40px"}} className="font-jbm text-l">Portfolio</Link>
        <Link to="/faq" className="font-jbm text-l">FAQ's</Link>
      </div>
      <div className="ml-auto">
        <WalletSelector />
      </div>
    </div>
  );
}

