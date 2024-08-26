
import {Grid} from "@chakra-ui/react";
import BetCard from "./BetCard";
import {useEffect, useState} from "react";

const bets= [
    {
        id:"1",
        question: "Question 1",
        firstOption: "Yes",
        secondOption: "No",
    },
    {
        id:"1",
        question: "Question 1",
        firstOption: "Yes",
        secondOption: "No",
    },
    {
        id:"1",
        question: "Question 1",
        firstOption: "Yes",
        secondOption: "No",
    },
    {
        id:"1",
        question: "Question 1",
        firstOption: "Yes",
        secondOption: "No",
    },
    {
        id:"1",
        question: "Question 1",
        firstOption: "Yes",
        secondOption: "No",
    }

]
const Marketplace = () => {
  
//   const [bets, setBets] = useState([]);

	useEffect(() => {
		const fetchBets = async () => {
			
			// setBets(response)
		}

		fetchBets()
	}, [])


  return (
    <div>
    <Grid
		mt={5}
		templateColumns={{
			base: "repeat(2, 1fr)",
			sm: "repeat(2, 1fr)",
			md: "repeat(4, 1fr)",
		}}
		gap={8}
		alignItems={"center"}
		p={6}>
                    {bets.map((bet) => (
                        <BetCard
                            key={bet?.id}
                            {...bet}
                        />
                    ))}
				</Grid>
    </div>
  )
}

export default Marketplace
