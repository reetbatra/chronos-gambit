import {Button, Center, Input} from '@chakra-ui/react'
import React, {useState} from 'react'

type Props = {}

function AdminForm({}: Props) {

    const [formData, setFormData] = useState({
		question: "",
        shareNumber:0,
        firstShareOption:"",
        secondShareOption:"",
        liquidityParameter:0
	})


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}))
	}

    const submitApproval = async (e:any) => {
        e.preventDefault();
    }
  return (
    <>
    <Center width={"30%"} bgColor={"white"} padding={"20px"} borderRadius={"10px"} boxShadow={"2xl"}>
    <form onSubmit={submitApproval}>
									
        <label htmlFor="question">Question</label>
		<Input
			required
			type="text"
			marginBottom="20px"
			marginTop="2px"
			name="question"
			placeholder="Prediction Question"
			value={formData.question}
			onChange={handleInputChange}
		/>

		<label htmlFor="shareNumber">No. of Shares</label>
		<Input
			type="number"
			marginBottom="20px"
			marginTop="2px"
			placeholder="Shares per each option"
			name="shareNumber"
			value={formData.shareNumber}
			onChange={handleInputChange}
			required
		/>

        


	

		<label htmlFor="firstShareOption">Prediction Option - 1</label>
		<Input
			type="text"
			marginBottom="25px"
			marginTop="2px"
			placeholder="Prediction Option"
			name="firstShareOption"
			value={formData.firstShareOption}
			onChange={handleInputChange}
			required={true}
		/>

   
        <label htmlFor="secondShareOption">Prediction Option - 2</label>
		<Input
			type="text"
			marginBottom="20px"
			marginTop="2px"
			placeholder="Prediction Option"
			name="secondShareOption"
			value={formData.secondShareOption}
			onChange={handleInputChange}
			required
		/>

    

        <label htmlFor="liquidityParameter">Liquidity Parameter</label>
		<Input
			type="number"
			marginBottom="20px"
			marginTop="2px"
			placeholder="Liquidity Parameter"
			name="liquidityParameter"
			value={formData.liquidityParameter}
			onChange={handleInputChange}
			required
		/>
		    <Button type="submit">Submit</Button>

			
        </form>
    </Center>

    </>
  )
}

export default AdminForm