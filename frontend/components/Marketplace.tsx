import { Grid } from "@chakra-ui/react";
import BetCard from "./BetCard";
import { useEffect} from "react";

const bets = [
  {
    id: "1",
    question: "Will Chrono's Gambit win the hackathon? Along with Kana labs And some moreee",
    firstOption: "Yes",
    secondOption: "No",
  },
  {
    id: "2",
    question: "Question 1",
    firstOption: "Yes",
    secondOption: "No",
  },
  {
    id: "3",
    question: "Question 1",
    firstOption: "Yes",
    secondOption: "No",
  },
  {
    id: "4",
    question: "Question 1",
    firstOption: "Yes",
    secondOption: "No",
  },
  {
    id: "5",
    question: "Question 1",
    firstOption: "Yes",
    secondOption: "No",
  },
];

const Marketplace = () => {
  // Uncomment and modify if you plan to fetch bets dynamically
  // const [bets, setBets] = useState([]);

  useEffect(() => {
    const fetchBets = async () => {
      // Fetch bets here
      // setBets(response)
    };

    fetchBets();
  }, []);

  return (
    <div style={{ minHeight: "100vh" }} className="font-jbm">
      <Grid
        mt={5}
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={8}
        alignItems={"center"}
        p={6}
      >
        {bets.map((bet) => (
            <div className="font-jbm">
                <BetCard key={bet?.id} {...bet} />
            </div>
        
        ))}
      </Grid>
    </div>
  );
};

export default Marketplace;
