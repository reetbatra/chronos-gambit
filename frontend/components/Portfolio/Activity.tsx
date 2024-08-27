import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
type Props = {}

const tradeData = [
    {
        id:"1",
        activity: "Buy",
        question:"Who will be new president of USA?",
        questionOption:"Donald trump",
        totalShares: 13,
        totalPrice: "24.78",
    }
]

function Activity({}: Props) {
  return (
    <>
    <TableContainer color={"white"} mt={10}>
      <Table variant='simple'>
        <TableCaption>Your Activity on Chrono's Gambit</TableCaption>
        <Thead>
          <Tr color={"white"}>
            <Th color={"white"}>Activity</Th>
            <Th color={"white"}>Question</Th>
            <Th color={"white"}>Share type</Th>
            <Th color={"white"}>Total Shares</Th>
            <Th color={"white"}>Total Price</Th>
          </Tr>
        </Thead>
        <Tbody>


          {tradeData.map((trade) => (
            <Tr key={trade.id}>
              <Td>{trade.activity}</Td>
              <Td>{trade.question}</Td>
              <Td>{trade.questionOption}</Td>
              <Td>{trade.totalShares}</Td>
              <Td>{trade.totalPrice}</Td>
            </Tr>
          ))}
        </Tbody>
        
      </Table>
</TableContainer>
    </>
  )
}

export default Activity