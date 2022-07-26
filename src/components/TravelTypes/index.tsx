import { Flex, GridItem, Image, Text } from "@chakra-ui/react";

interface TravelTypesProps {
  image: string;
  title: string;
}

export function TravelTypes({ image, title } : TravelTypesProps){
  return(
    <GridItem>
          <Flex justifyContent="center" align="center" direction="column">
            <Image
              src={image}
              w="85px"
            />
            <Text
              mt="6"
              fontWeight="semibold"
              fontSize={24}
              color="gray.900"
            >
              {title}
            </Text>
          </Flex>
        </GridItem>
  )
}