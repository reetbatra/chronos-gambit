import {Center, Flex, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react'
import Summary from './Portfolio/Summary'
import Activity from './Portfolio/Activity'

type Props = {}

function Portfolio({}: Props) {
  return (
    <>
    <Stack minHeight={"100vh"} width={"100%"} px={10}>
        <Heading textAlign={"center"}>My Portfolio</Heading>

                <Tabs variant='soft-rounded' colorScheme={"green"}>
                  <TabList>
                    <Tab>Activity</Tab>
                    <Tab>Summary</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                    <Center>
                      <Activity/>
                    </Center>  
                    </TabPanel>
                    <TabPanel>
                      <Summary/>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
    </Stack>   
    </>
  )
}

export default Portfolio