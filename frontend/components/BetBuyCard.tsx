import {Divider, Flex, Progress, Stack, Text} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


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

const BetBuyCard = () => {
  const { id } = useParams<{ id: string }>(); // Get the bet ID from the URL
  const [bet, setBet] = useState<any>(null); // State to hold the bet data
  const [amount, setAmount] = useState<number>(0); // State for bet amount input
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // State to track selected option

  useEffect(() => {
    // Fetch the bet details using the ID (replace with real fetching logic if needed)
    const foundBet = bets.find((bet) => bet.id === id);
    setBet(foundBet);
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      // Limit to two decimal places

     setAmount(Math.round(value * 100) / 100);
    }
  };

  const incrementAmount = () => {
    setAmount(prevAmount => Math.round((prevAmount + 1) * 100) / 100); // Increment by 0.1 and limit to two decimal places
  };

  const decrementAmount = () => {
    setAmount(prevAmount => Math.max(Math.round((prevAmount - 1) * 100) / 100, 0)); // Decrement by 0.1 and prevent negative values
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleBuyClick = () => {
    // Only proceed if amount is a number, greater than 0, and an option is selected
    if (amount > 0 && selectedOption) {
      alert(`Placed a bet of $${amount.toFixed(2)} on ${selectedOption}`);
    } else {
      alert('Please enter a valid bet amount and select an option.');
    }
  };

  return (
    <Flex minHeight={"100vh"} p={5} width={"100%"} color={"white"} justifyContent={"space-between"}>
        <Stack width={"60%"}>
            <h2 className="text-xl font-jbm font-bold mb-3" style={{color: "#CCCCFF"}}>{bet?.question}</h2>
            <Text fontSize={"lg"} mb={10} className="font-jbm">{bet?.description}</Text>

            <Stack>
                <Flex>
                    <Text mr={2}>{bet?.firstOption} </Text>
                    <Text> - 100 Shares</Text>
                </Flex>
                    <Progress width={"50%"} colorScheme='green' size='sm' value={50} />
                <Flex width={"100%"}>
                    <Text mr={2}>{bet?.secondOption}  {" "}</Text>
                    <Text> - 50 Shares</Text>
                </Flex>
                 <Progress width={"50%"} colorScheme='red' size='sm' value={40} />

            </Stack>

            <Divider my={10}></Divider>

            <h2 style={{color: "#CCCCFF"}} className="text-md font-jbm font-bold">About the Logarithmic Market Scoring Rule</h2>
            <Text fontSize={"sm"} mb={20} className="font-jbm">
                The Logarithmic Market Scoring Rule (LMSR) is a mathematical tool used to evaluate the accuracy of predictions. 
                It’s designed to encourage honesty and precision when making predictions about uncertain events.

                {/* <h2 style={{color: "#CCCCFF"}} className="text-md font-jbm font-bold mt-10 mb-3">Why Use LSR?</h2>
                The Logarithmic Scoring Rule is widely used in various fields, including economics, 
                machine learning, and prediction markets, because it provides a robust way to evaluate predictions.
                It’s particularly valuable for situations where honesty and accuracy are critical. */}

                <h2 style={{color: "#CCCCFF"}} className="text-md font-jbm font-bold mt-5">
                Explore our platform and see how the Logarithmic Scoring Rule can help you sharpen your predictive skills!
                </h2>

            </Text>

        </Stack>
        <Stack width={"20%"} mx={20}>
            <div style={{ color: 'white', backgroundColor: '#18191C' }} className="font-jbm p-4 rounded-lg border-2 border-[#CCCCFF] shadow-md w-full max-w-sm mx-auto">
              <div className="text-center mb-4">
                <h2 className="text-lg font-bold">Buy Bet</h2>
                {bet && <h3 className="text-sm text-gray-300 mt-2">{bet.question}</h3>}
              </div>

      {bet && (
        <>
          <div className="flex flex-col items-center mb-4">
            <button
              onClick={() => handleOptionClick(bet.firstOption)}
              className={`text-white font-bold py-2 px-4 mb-2 rounded ${selectedOption === bet.firstOption ? 'bg-green-600' : 'hover:bg-green-600'}`}
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
              onClick={() => handleOptionClick(bet.secondOption)}
              className={`text-white font-bold py-2 px-4 rounded ${selectedOption === bet.secondOption ? 'bg-red-600' : 'hover:bg-red-600'}`}
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

          <div className="flex flex-col items-center mb-4">
            {/* Balance and Max Buttons Above Input */}
            <div className="flex justify-between w-full mb-2">
              <button
                className="text-white font-bold py-1 px-2 rounded"
                
              >
                Balance : $40.50
              </button>
              {/* <button
                className="text-white font-bold py-1 px-2 rounded bg-[#CCCCFF] hover:bg-gray-600"
                style={{ borderColor: '#333', borderWidth: '2px', minWidth: '60px' }}
              >
                Max
              </button> */}
            </div>

            {/* Input Field and Increment/Decrement Buttons */}
            <div className="flex flex-row items-center w-max mb-4">
              <button
                onClick={decrementAmount}
                className="text-white font-bold py-2 px-4 rounded-l bg-[#CCCCFF] hover:bg-gray-600"
                style={{ borderColor: '#333', borderWidth: '2px' }}
              >
                -
              </button>
              <input
                type="number"
                value={amount.toFixed(2)}
                onChange={handleInputChange}
                placeholder="$0.0"
                className="text-black py-2 px-4 w-32 text-center"
                style={{ borderColor: '#333', borderWidth: '2px', borderLeft: 'none', borderRight: 'none' }}
              />
              <button
                onClick={incrementAmount}
                className="text-white font-bold py-2 px-4 rounded-r bg-[#CCCCFF] hover:bg-gray-600"
                style={{ borderColor: '#333', borderWidth: '2px' }}
              >
                +
              </button>
            </div>

            {/* BUY Button */}
            <button
              onClick={handleBuyClick}
              className="text-black font-bold py-2 px-4 rounded bg-[#ebebf0] hover:bg-[#CCCCFF] hover:text-white"
              style={{ borderColor: '#333', borderWidth: '2px', width: '100%' }}
              disabled={!selectedOption || amount <= 0}
            >
              BUY
            </button>
          </div>
        </>
      )}
            </div>
        </Stack>
    </Flex>
  );
};

export default BetBuyCard;