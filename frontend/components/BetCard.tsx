import {Avatar, Flex, Stack} from '@chakra-ui/react';
import { useState } from 'react';

type Props = {
    id:string,
    question: string;
    firstOption: string;
    secondOption: string;
};
const BetCard = (props:Props) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleMore = () => {
    setShowMore(!showMore);
    console.log(handleToggleMore)
  };

    const handleBetClick = (value:string) => {
      // handle the click event here
      window.alert(`Bet ${value}`);
    }

  return (
    <Stack width={"300px"} height={"250px"} bg={"#18191C"} className="rounded-lg shadow-md p-4 font-jbm" key={props.id} color={"white"}>
      
      <Flex height={"80%"}>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
          <div style={{fontWeight:"bold", marginTop:"10px", marginLeft:"10px", fontSize:"17px"}} className='font-jbm'>{props.question}</div>
      </Flex>

      
      {/* <div className="text-gray-700 text-base">
        {showMore ? (
          <>
            <p>
              This is a detailed description of the question. It provides more context about the bet
              and any relevant information that users should know before betting.
            </p>
            <button onClick={handleToggleMore} className="text-blue-500 hover:text-blue-700 mt-2">
              Show Less
            </button>
          </>
        ) : (
          <>
            <p>
              This is a short description...
            </p>
            <button onClick={handleToggleMore} className="text-blue-500 hover:text-blue-700 mt-2">
              Show More
            </button>
          </>
        )}
      </div> */}

      {/* Yes/No Buttons */}
      <div className="px-4 pb-2 flex justify-between font-jbm">
  <button
    onClick={() => handleBetClick(props.firstOption)}
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
    onClick={() => handleBetClick(props.secondOption)}
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
