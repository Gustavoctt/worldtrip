import { Flex, Heading, Text } from "@chakra-ui/react";

import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { SliderItem } from "../SliderItem";

export function Slider(){
  return(
    <Flex
    w="100%" 
    h="450px"
    maxWidth="1240px"
    mx="auto"
    mb="10"
    mt="10"
  >
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <SliderItem title="América do Norte" description="o segundo maior continente" image="/images/continents/northAmerica.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem title="América do Sul" description="exploração baseada em recursos naturais" image="/images/continents/southAmerica.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem title="Ásia" description="o maior e mais populoso" image="/images/continents/asia.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem title="Africa" description="o terceiro maior do mundo" image="/images/continents/africa.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem title="Europa" description="o continente mais antigo" image="/images/continents/europe.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem title="Oceania" description="o ultimo continente colonizado" image="/images/continents/oceania.jpg"/>
      </SwiperSlide>
     
    </Swiper>
  </Flex>
  )
}