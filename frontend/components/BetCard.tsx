import { Avatar, Flex, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; 

type Props = {
    id: string,
    question: string;
    firstOption: string;
    secondOption: string;
};

const BetCard = (props: Props) => {
  const navigate = useNavigate(); 

  const handleCardClick = () => {
    navigate(`/bet/${props.id}`);
  };

  const handleBetClick = (value: string) => {
    // handle the click event here
    window.alert(`Bet ${value}`);
  }

  return (
    <Stack 
      width={"350px"} 
      height={"250px"} 
      bg={"#18191C"} 
      className="rounded-lg shadow-md p-4 font-jbm cursor-pointer" 
      key={props.id} 
      color={"white"}
      onClick={handleCardClick} 
    >
      <Flex height={"80%"}>
        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        <div style={{ fontWeight: "bold", marginTop: "10px", marginLeft: "10px", fontSize: "17px" }} className='font-jbm'>
          {props.question}
        </div>
      </Flex>

      {/* Yes/No Buttons */}
      <div className="px-4 pb-2 flex justify-between font-jbm">
        <button
          onClick={(e) => { e.stopPropagation(); handleBetClick(props.firstOption); }} 
          style={{
            borderColor: "#008000",
            borderWidth: "2px",
            height: "auto", 
            borderRadius: "10px",
            padding: "5px 10px", 
            minWidth: "80px",
            maxWidth: "150px", 
            wordBreak: "break-word", 
            textAlign: "center",
            fontSize: "12px", 
          }}
          className="text-white font-bold rounded hover:bg-green-600"
        >
          Bet {props.firstOption}
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); handleBetClick(props.secondOption); }} // Prevent click propagation to the card click
          style={{
            borderColor: "#FF0000",
            borderWidth: "2px",
            height: "auto", 
            borderRadius: "10px",
            padding: "5px 10px", 
            minWidth: "80px",
            maxWidth: "150px", 
            wordBreak: "break-word", 
            textAlign: "center",
            fontSize: "12px", 
          }}
          className="text-white font-bold rounded hover:bg-red-600"
        >
          Bet {props.secondOption}
        </button>
      </div>

      {/* Card Footer */}
      <div className="flex mt-1 text-gray-500 text-sm justify-between font-jbm">
        Volume: $190mn  Total Investors: 20
      </div>
    </Stack>
  );
};

export default BetCard;
