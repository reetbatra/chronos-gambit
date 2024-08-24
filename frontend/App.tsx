import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Internal Components
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from '@/components/FAQ';       

function App() {
  const { connected } = useWallet();

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/faq" element={<FAQ />} />
        <Route path="/" element={
          <div className="flex items-center justify-center flex-col">
            {connected ? (
              <div>
                <img
                  src="/logonobg.png"
                  className="w-64 h-64 object-contain transform transition duration-500 ease-in-out hover:scale-110"
                  alt="Logo"
                />
              </div>
            ) : (
              <CardHeader>
                <CardTitle>To get started Connect a wallet</CardTitle>
              </CardHeader>
            )}
          </div>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

