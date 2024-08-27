import {Box, Flex} from '@chakra-ui/react'
import AdminForm from './AdminForm'
import VoteTable from './VoteTable'

type Props = {}

function Admin({}: Props) {
  return (
    <>
    <Box minHeight={"100vh"} width={"100%"} pt={20} px={20}>
        {/* <h1>Admin</h1> */}
        {/* <p>Voting Functionality</p> */}
        {/* <Flex> */}
        <AdminForm/>
        <Box mx={10}>        
            <VoteTable/>
        </Box>
        {/* </Flex> */}
        
    </Box>
    </>
  )
}

export default Admin