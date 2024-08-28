import { Avatar, Flex, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; 

type Props = {
    id: string,
    createdAt: string,
    imageURL:string;
    question: string;
    option_1: string;
    option_2: string;
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

  function hexToAscii(hex:any) {
        let str = '';
        for (let i = 2; i < hex.length; i += 2) {
            str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        }
        return str;
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
    //https://bit.ly/dan-abramov
      <Flex height={"80%"}>
        <Avatar name='Dan Abrahmov' src={props?.imageURL} />
        <div style={{ fontWeight: "bold", marginTop: "10px", marginLeft: "10px", fontSize: "17px" }} className='font-jbm'>
          {hexToAscii(props.question)}
        </div>
      </Flex>

      {/* Yes/No Buttons */}
      <div className="px-4 pb-2 flex justify-between font-jbm">
        <button
          onClick={(e) => { e.stopPropagation(); handleBetClick(props.option_1); }} 
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
          Bet {hexToAscii(props.option_1)}
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); handleBetClick(props.option_2); }} // Prevent click propagation to the card click
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
          Bet {hexToAscii(props.option_2)}
        </button>
      </div>

      {/* Card Footer */}
      <div className="flex mt-1 text-gray-500 text-sm justify-between font-jbm">
        {new Date(props?.createdAt).toLocaleDateString()}
      </div>
    </Stack>
  );
};

export default BetCard;
