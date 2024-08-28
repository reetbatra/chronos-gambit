import { Stack} from '@chakra-ui/react'

type Props = {}

function Market({}: Props) {
  return (
    <>
        <div style={{ minHeight: "100vh", color: "white" }}>
                Market
                <Stack>
                <text style={{ fontFamily: "'JetBrains Mono'", color:"white"}}>Graphs of Price, Volume, total Investors, Question, Option</text></Stack>
                <Stack>
                <p>Card to buy and Sell shares</p></Stack>
        </div>
    </>
  )
}

export default Market