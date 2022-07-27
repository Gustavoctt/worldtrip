import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
   <>
      <Header />
      <Banner />

      <Grid 
        mt={["10", "36"]} 
        templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", 'repeat(5, 1fr)']} 
        gap={[2, 5]} 
        px="16"
        mx="auto"
        maxWidth={1410}
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        >
        
        <TravelTypes  image="/icons/drink.svg" title="vida noturna" />
        <TravelTypes  image="/icons/surf.svg" title="praia" />
        <TravelTypes  image="/icons/building.svg" title="moderno" />
        <TravelTypes  image="/icons/museum.svg" title="clássico" />
        <TravelTypes  image="/icons/earth.svg" title="e mais..." />
      </Grid>

      <Box bg="gray.900"  mx="auto" my="20" w="90px"  h="2" />

      <Heading
        textAlign="center"
        fontWeight="medium"
        color="gray.900"
      >
        Vamos nessa? <br/>
        Então escolha seu continente
      </Heading>
    
      <Slider />
    
   </>
  )
}
