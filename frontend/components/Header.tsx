import { WalletSelector } from "./WalletSelector";
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div style={{ backgroundColor:"#f5f5f5", display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/logonobg.png" alt="Logo" width={40} height={40} />
        <Link to="/"><h1 className="font-jbm text-xl">Chrono's Gambit</h1></Link>
      </div>
      <div style={{ display: 'flex', justifyContent:"flex-end", width:"70%"}}>
        <Link to="/faq" className="font-jbm text-l" style={{marginRight:"40px"}}>FAQ's</Link>
        <Link to="/marketplace" className="font-jbm text-l" style={{marginRight:"10px"}}>Marketplace</Link>
      </div>
      <div className="ml-auto">
        <WalletSelector />
      </div>
    </div>
  );
}

