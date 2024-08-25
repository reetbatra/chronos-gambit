import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Internal Components
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from '@/components/FAQ';       
import Marketplace from "./components/Marketplace";


function App() {
  const { connected } = useWallet();

  return (
    <Router>
      <Header />
      <div className="flex flex-col min-h-screen"> {/* Ensure the content stretches the full height */}
        <main className=" flex flex-col items-center px-4 py-8"> {/* Main content area */}
          <Routes>
            <Route path="/faq" element={<FAQ />} />
            <Route path="/marketplace" element={<Marketplace/>} />
            <Route
              path="/"
              element={
                <div className="flex flex-col items-center w-full max-w-4xl">
                  {connected ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-center">
                      {/* Left Column */}
                      <div className="flex flex-col items-center justify-center p-4">
                        <p className="font-jbm text-lg">
                          Chrono's Gambit: A decentralized prediction market platform on the Aptos blockchain. Make predictions on politics and more—securely and transparently, with low fees. Join us to harness collective intelligence and gain rewards for accurate predictions.
                        </p>
                        <button 
                          className="mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300 font-jbm text-lg"
                          onClick={() => window.location.href = '/marketplace'}
                        >
                          Get Started
                        </button>
                      </div>

                      {/* Right Column */}
                      <div className="flex justify-center items-center">
                        <img
                          src="/logonobg.png"
                          className="w-64 h-64 md:w-80 md:h-80 object-contain transform transition duration-500 ease-in-out hover:scale-105"
                          alt="Logo"
                        />
                      </div>
                    </div>
                  ) : (
                    <CardHeader className="flex items-center justify-center flex-col py-4">
                      <CardTitle className="font-jbm text-lg text-center">
                        To get started, Connect a wallet
                      </CardTitle>
                    </CardHeader>
                  )}
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
