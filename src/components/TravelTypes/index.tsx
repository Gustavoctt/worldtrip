import { Flex, GridItem, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypesProps {
  image: string;
  title: string;
}

export function TravelTypes({ image, title } : TravelTypesProps){
  const isMobile = useBreakpointValue({
    base: false,
    sm: true
  })
  return(
    <GridItem>
          <Flex 
            justify="center" 
            direction={["row", "column"]}
          >
            { isMobile ?  
              <Image
                src={image}
                w="85px"
              />
            : <Text color="yellow.400" fontSize="4xl" mr="2">•</Text>}
            
            <Text
              mt="6"
              fontWeight="semibold"
              fontSize={["md", "xl", "2xl"]}
              color="gray.900"
            >
              {title}
            </Text>
          </Flex>
        </GridItem>
  )
}