import {Box, Center, Heading, Stack} from "@chakra-ui/react"
import {useEffect} from "react";
import {BackgroundBeams} from "./ui/background-beams";
import {Link} from "react-router-dom";
function Homepage() {

    useEffect(() => {
        const injectScript = document.createElement('script');
        injectScript.src = 'https://cdn.botpress.cloud/webchat/v2.1/inject.js';
        injectScript.async = true;
        document.body.appendChild(injectScript);

        const configScript = document.createElement('script');
        configScript.src = 'https://mediafiles.botpress.cloud/43e0165b-15b6-4289-b3bf-0baa7a9a8029/webchat/v2.1/config.js';
        configScript.async = true;
        document.body.appendChild(configScript);

        return () => {
          document.body.removeChild(injectScript);
          document.body.removeChild(configScript);
        };
  }, []);
  return (
    <>
    <BackgroundBeams />
<Center zIndex={1} minHeight={"90vh"} className="font-jbm" px={5} color={"white"}>
  {/* <Spotlight/> */}
  <Stack textAlign={"center"} pb={5} alignItems={"center"}>
    <Heading py={10} style={{ fontFamily: "'JetBrains Mono'" }} >
      Chrono's Gambit
    </Heading>
    <Box width="70%" className="font-jbm text-2xl mb-2">
    Predict the Future, Own the Outcome
    </Box>
    <Box width="70%" className="font-jbm text-l">
    Secure, Transparent, and Low-Fee Prediction Market on Aptos – Where Collective Intelligence Meets Rewards
    </Box>

    <Link to="/marketplace"><button
  className="mt-4 py-2 px-4 rounded-md transition duration-300 font-jbm text-lg w-48 bg-white text-black border border-black hover:bg-[#5252FF] hover:text-white"
>
  Get Started
</button>
</Link>


  </Stack>



<div>
    <script src="https://cdn.botpress.cloud/webchat/v2.1/inject.js"></script>
    <script src="https://mediafiles.botpress.cloud/43e0165b-15b6-4289-b3bf-0baa7a9a8029/webchat/v2.1/config.js"></script>
</div>

    </Center>
    </>
  )
}

export default Homepage