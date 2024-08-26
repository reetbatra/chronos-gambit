import { useState } from 'react';

const BetCard = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      
      <div className="font-bold text-lg mb-2">Will the next election be won by Party A?</div>

      
      <div className="text-gray-700 text-base">
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
      </div>

      {/* Yes/No Buttons */}
      <div className="mt-4 flex justify-between">
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600">
          Yes
        </button>
        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600">
          No
        </button>
      </div>

      {/* Card Footer */}
      <div className="mt-4 text-gray-500 text-sm">
        Footer text with some additional information or disclaimers.
      </div>
    </div>
  );
};

export default BetCard;
