import {Center, Flex, Stack, Text} from '@chakra-ui/react'
import React from 'react'

type Props = {}

function Summary({}: Props) {
  return (
    	<>

			<Center width={"100%"}>
				<Flex
					mx={50}
					mt={10}
					mb={20}
					justify={"space-between"}
					width="50%"
					borderRadius={10}
					bg={"brand.ternary"}
					border={"solid 1px gray"}
					px={10}
					py={5}>
					<Stack width="50%">
						<Stack justify={"flex-start"}>
							<Text color={"brand.quinary"}>Current Amount</Text>
							<Text fontSize={20} color={"brand.secondary"}>
								$11000
							</Text>
						</Stack>
						<Stack justify={"flex-start"}>
							<Text color={"brand.quinary"}>Invested Amount</Text>
							<Text fontSize={20} color={"brand.secondary"}>
								$10000
							</Text>
						</Stack>
					</Stack>
					<Stack width={"50%"} textAlign={"right"}>
						<Stack>
							<Text color={"brand.quinary"}>Total Markets</Text>
							<Text fontSize={20} color={"brand.secondary"}>
								10
							</Text>
						</Stack>
						<Stack>
							<Text color={"brand.quinary"}>Total Returns</Text>
							<Text fontSize={20} color={"brand.secondary"}>
								$1000
							</Text>
						</Stack>
					</Stack>
				</Flex>
			</Center>
		</>
  )
}

export default Summary