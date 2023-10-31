import { Carousel } from "@mantine/carousel";
import { Flex, Text, Title } from "@mantine/core";
import { trans } from "@mongez/localization";
import { preload } from "@mongez/react-utils";
import { IconBarbell, IconUser } from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { BranchesCheckInsSliderStyles } from "../../Home-Style";
import { getTopTenEmployees } from "../../services/home-service";
import { CarouselSlide } from "./BranchesCheckInCountSlider.Style";

function _TopEmployees({ response }: any) {
  const employees = response.data;

  const autoplay = useRef(Autoplay({ delay: 3000 }));

  if (!employees) return;

  return (
    <Flex direction="column" gap="1.5rem" p="1rem">
      <Flex justify="space-between" align="center">
        <Flex direction="column" gap="0.2rem">
          <Title order={3} m={0} fw={700}>
            {trans("topTenEmployees")}
          </Title>
        </Flex>
      </Flex>
      <Carousel
        height="fit-content"
        controlsOffset="-20%"
        controlSize={40}
        loop
        slideSize="20%"
        slidesToScroll={1}
        slideGap={20}
        align="start"
        breakpoints={[
          { maxWidth: "lg", slideSize: "30%" },
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%" },
        ]}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        styles={BranchesCheckInsSliderStyles}>
        {employees.map((employee, index) => (
          <CarouselSlide key={index}>
            <Flex
              style={{ border: "1px solid #f6f4f4", borderRadius: "1rem" }}
              direction="column"
              align="center"
              justify="center"
              gap="1rem"
              p="1rem">
              <Flex
                justify="center"
                align="center"
                p="0.8rem"
                bg="#f6f4ff"
                style={{
                  borderRadius: "50%",
                }}>
                <IconUser color="#5234da" size={50} />
              </Flex>
              <Title order={3} fz="1rem">
                {employee.name}
              </Title>
              <Flex align="center" gap="0.5rem">
                <IconBarbell color="#ffc116d3" size={20} />
                <Text fz="0.8rem" span fw={600}>
                  {employee.check_ins_count} {trans("visit")}
                </Text>
              </Flex>
            </Flex>
          </CarouselSlide>
        ))}
      </Carousel>
    </Flex>
  );
}

const TopEmployees = preload(_TopEmployees, getTopTenEmployees);

export default TopEmployees;
