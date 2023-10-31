import styled from "@emotion/styled";
import { Carousel } from "@mantine/carousel";
import { Text } from "@mantine/core";

export const SendRequestButton = styled<any>(Text)`
  label: SendRequestButton;
  cursor: pointer;
`;

export const CarouselSlide = styled<any>(Carousel.Slide)`
  label: CarouselSlide;
  transition: box-shadow 0.3s;
  cursor: pointer;
`;
