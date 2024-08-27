import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

type Props = {};

const tradeData = [
    {
        id: "1",
        activity: "Buy",
        question: "Who will be new president of USA?",
        questionOption: "Donald Trump",
        totalShares: 13,
        totalPrice: "24.78",
    }
];

function Activity({}: Props) {
  return (
    <div className='font-jbm'> 
      <TableContainer color={"white"} mt={10}>
        <Table variant='simple'>
          <TableCaption style={{ fontFamily: "'JetBrains Mono'" }}>Your Activity on Chrono's Gambit</TableCaption>
          <Thead>
            <Tr>
              <Th color={"white"} style={{ fontFamily: "'JetBrains Mono'" }}>Activity</Th> 
              <Th color={"white"} style={{ fontFamily: "'JetBrains Mono'" }}>Question</Th> 
              <Th color={"white"} style={{ fontFamily: "'JetBrains Mono'" }}>Share Type</Th>
              <Th color={"white"} style={{ fontFamily: "'JetBrains Mono'" }}>Total Shares</Th>
              <Th color={"white"} style={{ fontFamily: "'JetBrains Mono'" }}>Total Price</Th> 
            </Tr>
          </Thead>
          <Tbody>
            {tradeData.map((trade) => (
              <Tr key={trade.id}>
                <Td className='font-jbm'>{trade.activity}</Td>
                <Td className='font-jbm'>{trade.question}</Td> 
                <Td className='font-jbm'>{trade.questionOption}</Td> 
                <Td className='font-jbm'>{trade.totalShares}</Td> 
                <Td className='font-jbm'>{trade.totalPrice}</Td> 
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Activity;
