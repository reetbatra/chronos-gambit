import {Box, Center, Container, Heading, Stack} from "@chakra-ui/react"
import {useEffect} from "react";
import {Spotlight} from "./ui/Spotlight";
import {BackgroundBeams} from "./ui/background-beams";
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
    
    <BackgroundBeams/>
    <Center  zIndex={1} minHeight={"90vh"} className="font-jbm" px={5} color={"white"}>
    {/* <Spotlight/> */}
            <Stack textAlign={"center"} pb={5} alignItems={"center"}>
                <Heading py={10}>CHRONO's  GAMBIT</Heading>
                <Box width="70%"className="font-jbm text-lg">
                   A decentralized prediction market platform on the Aptos blockchain. Make predictions on politics and more—securely and transparently, with low fees. Join us to harness collective intelligence and gain rewards for accurate predictions.
                </Box>
                
                <button 
                   style={{width:"200px"}}
                  className="mt-4 bg-white text-black py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300 font-jbm text-lg"
                  onClick={() => window.location.href = '/marketplace'}
                >
                  Get Started
                </button>
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