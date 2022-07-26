import { Flex, Heading, Text } from "@chakra-ui/react";

interface SliderItemProps {
  image: string;
  title: string;
  description: string;
}

export function SliderItem({ image, title, description }: SliderItemProps){
  return(
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="center"
      direction="column"
      bgImage={image}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      textAlign="center"
    >
      <Heading
        color="gray.300"
        fontSize="5xl"
        mb="4"
      >{title}</Heading>
      <Text
        color="gray.200"
        fontSize="2xl"
      >{description}</Text>
    </Flex>
  )
}