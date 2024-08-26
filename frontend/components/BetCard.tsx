import {Stack} from '@chakra-ui/react';
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
  };

    const handleBetClick = (value:string) => {
      // handle the click event here
      window.alert(`Bet ${value}`);
    }

  return (
    <Stack width={"300px"} height={"200px"} className="bg-white rounded-lg shadow-md p-4" key={props.id}>
      
      <div style={{fontWeight:"bold"}}>{props.question}</div>

      
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
      <div className="mt-20 px-4 flex justify-between">
        <button onClick={()=>{handleBetClick(props.firstOption)}} style={{backgroundColor:"#008000"}} className="text-white font-bold py-2 px-4 rounded hover:bg-green-600">
           Bet {props.firstOption}
        </button>
        <button onClick={()=>handleBetClick(props.secondOption)} style={{backgroundColor:"#FF0000"}} className=" text-white font-bold py-2 px-4 rounded hover:bg-red-600">
            Bet {props.secondOption}
        </button>
      </div>

      {/* Card Footer */}
      {/* <div className="mt-4 text-gray-500 text-sm">
        Footer text with some additional information or disclaimers.
      </div> */}
    </Stack>
  );
};

export default BetCard;
