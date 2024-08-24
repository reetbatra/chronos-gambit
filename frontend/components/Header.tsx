import { WalletSelector } from "./WalletSelector";
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-2 max-w-screen-xl mx-auto w-full flex-wrap my-2">
      <div className="flex items-center gap-4">
        <img src="/logonobg.png" alt="Logo" width={40} height={40} />
        <h1 className="font-jbm text-xl">Chrono's Gambit</h1>
        <Link to="/faq" className="font-jbm text-l">FAQ's</Link>
        <Link to="/marketplace" className="font-jbm text-l">Marketplace</Link>
      </div>

      <div className="ml-auto">
        <WalletSelector />
      </div>
    </div>
  );
}

