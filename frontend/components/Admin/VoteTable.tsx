import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Flex,
} from '@chakra-ui/react'
type Props = {}

const tradeData = [
    {
        id:"1",
        question:"Who will be new president of USA?",
        receivedData: "Donald trump"
    },

    {
        id:"2",
        question:"Will Taylor Swift endorse Kamala Harris before elections?",
        receivedData: "No"
    },

    {
        id:"3",
        question:"Will it rain on demo day?",
        receivedData: "Yes"
    },




]

function VoteTable({}: Props) {
  
  const handleVote= (value:boolean) =>{
console.log(value)
  }
  return (
    <>

    <TableContainer my={10} color={"white"}>
      <Table variant='simple'>
        {/* <TableCaption>Your Activity on Chrono's Gambit</TableCaption> */}
        <Thead>
          <Tr>
            <Th>Question</Th>
            <Th>Received Data</Th>
            <Th>Action</Th>
            <Th>Result</Th>
          </Tr>
        </Thead>
        <Tbody>


          {tradeData.map((trade) => (
            <Tr key={trade.id}>
              <Td>{trade.question}</Td>
              <Td>{trade.receivedData}</Td>
              <Td> <Flex><Button color={"white"} _hover={{bg: "white", color: "black"}} variant='outline' mr={5}onClick={()=>handleVote(true)}>True</Button> <Button  _hover={{bg: "white", color: "black"}} color={"white"} variant='outline' onClick={()=>handleVote(false)}>False</Button></Flex></Td>
              <Td>Yet to decide</Td>
            </Tr>
          ))}
        </Tbody>
        
      </Table>
</TableContainer>
    </>
  )
}

export default VoteTable