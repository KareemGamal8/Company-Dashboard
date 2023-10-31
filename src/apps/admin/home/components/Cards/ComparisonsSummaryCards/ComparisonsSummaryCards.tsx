import { Anchor, Box, Flex, Group, Text, ThemeIcon } from "@mantine/core";
import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import {
  IconArrowDownRight,
  IconArrowUpRight,
  IconChevronsRight,
} from "@tabler/icons-react";
import { useMemo, useRef, useState } from "react";
import { SummaryCard } from "./ComparisonsSummaryCardsClass";
import "./style.css";

export default function DiffSummaryCard({
  title,
  value,
  icon: Icon,
  content,
  color = "dark",
  valueSuffix,
  valuePrefix,
  previousValue,
  filled,
  link,
  iconBG = "gray",
  linkText = trans("readMore"),
  percentageLabel,
}: SummaryCard) {
  const diff =
    previousValue && value
      ? Math.round(((value - previousValue) / previousValue) * 100)
      : undefined;

  const renderedIcon = useMemo(() => {
    if (Icon) {
      return (
        <ThemeIcon
          color={iconBG}
          variant="light"
          sx={theme => ({
            color: theme.colors[color][6],
          })}
          size={38}
          radius="md">
          <Icon size="1.8rem" stroke={1.5} />
        </ThemeIcon>
      );
    }

    if (diff === undefined) return null;

    const DiffIcon = diff > 0 ? IconArrowUpRight : IconArrowDownRight;

    return (
      <ThemeIcon
        color={iconBG}
        variant="light"
        sx={theme => ({
          color: diff > 0 ? theme.colors.teal[6] : theme.colors.red[6],
        })}
        size={38}
        radius="md">
        <DiffIcon size="1.8rem" stroke={1.5} />
      </ThemeIcon>
    );
  }, [Icon, iconBG, color, diff]);

  const cardContent = useMemo(() => {
    let cardContent = content;
    let linkContent: React.ReactNode = "";

    if (link) {
      linkContent = (
        <Anchor component={Link} to={link}>
          <Flex>
            <span>{linkText}</span>
            <Text mt={2}>
              <IconChevronsRight />
            </Text>
          </Flex>
        </Anchor>
      );
    }

    if (content && typeof content === "string") {
      cardContent = (
        <Text fz="sm" mt={link ? undefined : "sm"}>
          <span>{content}</span>
        </Text>
      );
    }

    if (cardContent) {
      if (link) {
        return (
          <Flex justify={"space-between"} mt="sm">
            <div>{cardContent}</div>
            {linkContent}
          </Flex>
        );
      }
      return cardContent;
    }

    if (diff === undefined) return null;

    let diffColor = diff > 0 ? "teal" : "red";
    const arrowIcon =
      diff > 0 ? (
        <IconArrowUpRight color="green" size="1.8rem" stroke={1.5} />
      ) : (
        <IconArrowDownRight color="red" size="1.8rem" stroke={1.5} />
      );

    if (filled) {
      diffColor = diff > 0 ? "teal.2" : "red.2";
    }

    const diffContent = (
      <Flex align="center" mt={link ? undefined : "sm"}>
        {arrowIcon}
        <Text
          component="span"
          c={diffColor}
          fw={700}
          ml={1}
          mr={10}>{`${diff}%`}</Text>
        <Text fz="sm">
          {diff > 0 ? trans("increase") : trans("decrease")} {percentageLabel}
        </Text>
      </Flex>
    );

    if (link) {
      return (
        <Flex justify={"space-between"} mt="sm">
          <div>{diffContent}</div>
          {linkContent}
        </Flex>
      );
    }

    return diffContent;
  }, [content, filled, link, linkText, diff, percentageLabel]);

  const [mouseMove, setMouseMove] = useState(false);

  const [xPosition, setXPosition] = useState(0);

  const [yPosition, setYPosition] = useState(0);

  const wrapperRef: any = useRef<HTMLDivElement>(null);

  function mouseHandler(event: React.MouseEvent<HTMLDivElement>) {
    // Calculate the initial position once when the mouse enters
    const rect = wrapperRef.current?.getBoundingClientRect();

    // Calculate the new X and Y position based on the initial position
    const newPosX = event.clientX - rect.left;
    const newPosY = event.clientY - rect.top;

    // Update X and Y position
    setXPosition(newPosX);
    setYPosition(newPosY);

    // Set the 'mouseMove' state to 'true'
    setMouseMove(true);
  }

  return (
    <Box
      h={150}
      className="card"
      ref={wrapperRef}
      onMouseLeave={() => setMouseMove(false)}
      onMouseEnter={mouseHandler}>
      <Group w="100%" position="apart">
        <Flex w="100%" align="flex-start" justify="space-between">
          <Box>
            <Text tt="uppercase" fw={700} fz="xs">
              {title}
            </Text>
            <Text fw={700} fz="xl">
              {valuePrefix}
              {value.toLocaleString()}
              {valueSuffix}
            </Text>
            {cardContent}
          </Box>
          <Box>{renderedIcon}</Box>
        </Flex>
      </Group>
      <div
        className="child"
        style={{
          width: mouseMove ? "300%" : "",
          height: mouseMove ? "300%" : "",
          top: yPosition,
          left: xPosition,
          zIndex: -1,
          // Card Hover Background
          background: color,
        }}></div>
    </Box>
  );
}
