import { useParams } from 'react-router-dom';
import BetBuyCard from './BetBuyCard';

const BetDetails = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div style={{ minHeight: "100vh" }} className="max-w-2xl mx-auto p-4 font-jbm text-white" color={"brand.secondary"}>
      <h1 className="text-2xl font-jbm mb-4">Bet Details</h1>
      <BetBuyCard/>
      </div>
  );
};

export default BetDetails;

