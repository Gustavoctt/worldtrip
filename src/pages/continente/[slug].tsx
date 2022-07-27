import { Box, Flex, Grid, GridItem, HStack, Icon, Image, Text, Tooltip, VStack } from "@chakra-ui/react";

import { RiInformationLine } from 'react-icons/ri'

import { Header } from "../../components/Header";

export default function Continent(){
  return(
    <Flex 
      w="100%"
      direction="column"
    >
      <Header />

      <Flex
        w="100%"
        h="500px"
        bgImage="url('/images/continents/europe.jpg')"
        bgPosition={["100% 70%", "100% 70%", "100% 60%"]}
        bgRepeat="no-repeat"
        bgSize="cover"
        align="start"
        justify="flex-end"
        direction="column"
      >
        <Text
          color="gray.200"
          fontSize="5xl"
          fontWeight='semibold'
          mb="5"
          ml="20"
        >
          Europa
        </Text>
      </Flex>

      <Flex
        px="32"
        py="40"
      >
        <HStack spacing="80px" >
          <Box flex='1' lineHeight={2.0}  justifyContent='space-evenly'>
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Box>
          <Flex flex='1' justify='space-between' direction="row">
            <Flex direction="column" align="center">
              <Text color="yellow.900" fontWeight="semibold" fontSize={48}>50</Text>
              <Text color="gray.900" fontWeight="semibold" fontSize={24}>paises</Text>
            </Flex>
            <Flex direction="column" align="center">
              <Text color="yellow.900" fontWeight="semibold" fontSize={48}>60</Text>
              <Text color="gray.900" fontWeight="semibold" fontSize={24}>línguas</Text>
            </Flex>
            <Flex direction="column" align="center">
              <Text color="yellow.900" fontWeight="semibold" fontSize={48}>27</Text>
              <Text color="gray.900" fontWeight="semibold" fontSize={24}>cidades +100 
                <Tooltip label="Mais cidades" aria-label='A tooltip' >
                  <Icon ml="10px" />
                </Tooltip>
              </Text>
            </Flex>
          </Flex>
        </HStack>
      </Flex>

      <Flex direction="column" px="32">
        <Text fontWeight="medium" fontSize={36} color="gray.900" mb="10">Cidades +100</Text>

        <Grid templateColumns="repeat(4, 1fr)" gap={6}> 
          <GridItem w='100%' h='279' bg='yellow.900' borderRadius="8">
            <Image 
              borderTopRadius="8"
              h="173"
              src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
            />
            <Flex w="100" h="100" align="center">
              <VStack spacing={5} align="flex-start" ml="5">
                <Text>Londres</Text>
                <Text>Reino Unido</Text>
              </VStack>
              <Flex justifyContent="center" alignItems="center">
                Bandeira
              </Flex>
            </Flex>
          </GridItem>
          <GridItem w='100%' h='279' bg='blue.500' />
          <GridItem w='100%' h='279' bg='blue.500' />
          <GridItem w='100%' h='279' bg='blue.500' />
          <GridItem w='100%' h='279' bg='blue.500' />
        </Grid>
      </Flex>
    </Flex>
  )
}