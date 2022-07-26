import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner(){
  return(
    <Flex
      w="100%"
      h="335px"
      bgImage="url('/images/banner.png')"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex justify="space-between" align="center" w="100%"  px={["4","10","15","20","36"]}>
       <div>
        <Heading 
          color="gray.300" 
          fontSize="4xl"
          fontWeight="medium"
        >
          5 Continentes,<br/> infinitas possibilidades.
        </Heading>
        <Text 
          color="gray.200"
          fontWeight="normal"
          maxW="550px"
          mt="10"
          fontSize="20"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
        </Text>
       </div>
       <Image 
        maxWidth={417} 
        display={["none", 'none', "block"]}
        src="/images/airplane.svg" alt="Airplane"
        transform="translate(48px)"  
        mt="140px"
      />
      </Flex>
    </Flex>
  )
}