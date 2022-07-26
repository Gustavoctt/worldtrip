import { Flex, Image } from "@chakra-ui/react";
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

export function Header(){
  return(
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="100"
      mx="auto"
      mt="4"
      px="6"
      justify="center"
    >
      {/* <IconButton 
        aria-label="Back to homepage"
        icon={ <Icon as={MdOutlineArrowBackIosNew}/> }
        fontSize="24"
        variant="unstyled"
        mr="2"
      /> */}
      <Image maxWidth={184} src="/images/logo.svg" alt="Logo"/>
    </Flex>
  )
}