import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Mock data simulating BetCard data (replace this with actual data fetching logic)
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
  // Add more bet data as needed
];

const BetBuyCard = () => {
  const { id } = useParams<{ id: string }>(); // Get the bet ID from the URL
  const [bet, setBet] = useState<any>(null); // State to hold the bet data
  const [amount, setAmount] = useState<number | ''>(''); // State for bet amount input

  useEffect(() => {
    // Fetch the bet details using the ID (replace with real fetching logic if needed)
    const foundBet = bets.find((bet) => bet.id === id);
    setBet(foundBet);
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+(\.\d{0,2})?$/.test(value)) {
      setAmount(value === '' ? '' : parseFloat(value));
    }
  };

  const handleBetClick = (option: string) => {
    // Only proceed if amount is a number and greater than 0
    if (typeof amount === 'number' && amount > 0) {
      alert(`Placed a bet of $${amount} on ${option}`);
    } else {
      alert('Please enter a valid bet amount.');
    }
  };

  return (
    <div style={{ color: 'white', backgroundColor: '#18191C' }} className="font-jbm p-4 rounded-lg shadow-md w-full max-w-sm mx-auto">
      <div className="text-center mb-4">
        <h2 className="text-lg font-bold">Buy</h2>
        {bet && <h3 className="text-sm text-gray-300 mt-2">{bet.question}</h3>}
      </div>

      {bet && (
        <>
          <div className="flex flex-col items-center mb-4">
            <button
              onClick={() => handleBetClick(bet.firstOption)}
              className="text-white font-bold py-2 px-4 mb-2 rounded hover:bg-green-600"
              style={{
                borderColor: '#008000',
                borderWidth: '2px',
                minWidth: '100px',
                width: '100%',
              }}
            >
              Bet {bet.firstOption}
            </button>
            <button
              onClick={() => handleBetClick(bet.secondOption)}
              className="text-white font-bold py-2 px-4 rounded hover:bg-red-600"
              style={{
                borderColor: '#FF0000',
                borderWidth: '2px',
                minWidth: '100px',
                width: '100%',
              }}
            >
              Bet {bet.secondOption}
            </button>
          </div>

          <div className="flex flex-col items-center">
            <input
              type="number"
              value={amount}
              onChange={handleInputChange}
              placeholder="Enter amount in $"
              className="text-black py-2 px-4 rounded w-full"
              style={{ maxWidth: '100%' }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BetBuyCard;
