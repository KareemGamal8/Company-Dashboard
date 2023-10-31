import { Flex, Text } from "@mantine/core";
import { trans } from "@mongez/localization";
import { SummaryCardType } from "apps/admin/home/types";
import { useRef, useState } from "react";
import ProgressBar from "../ProgressBar";
import "./summary-style.css";

export default function SummaryCard({ card }: { card: SummaryCardType }) {
  const { Icon } = card;
  const [mouseMove, setMouseMove] = useState(false);

  const [xPosition, setXPosition] = useState(0);

  const [yPosition, setYPosition] = useState(0);

  const wrapperRef: any = useRef<HTMLDivElement>(null);

  function mouseHandler(event: React.MouseEvent<HTMLDivElement>) {
    const rect = wrapperRef.current?.getBoundingClientRect();

    const newPosX = event.clientX - rect.left;
    const newPosY = event.clientY - rect.top;

    setXPosition(newPosX);
    setYPosition(newPosY);

    setMouseMove(true);
  }
  return (
    <div
      className="card"
      ref={wrapperRef}
      onMouseLeave={() => setMouseMove(false)}
      onMouseEnter={mouseHandler}
      style={{
        width: "100%",
      }}>
      <div
        className="card-image"
        style={{
          background: card.bgColor,
        }}>
        <Icon color={card.iconColor} size={40} />
      </div>
      <div className="card-content">
        <Text fz={15} fw={600} component="p" m={0} c="gray.5">
          {trans(card.title)}
        </Text>
        {card.title === "totalSales" ? (
          <Flex align="flex-start" gap={5}>
            <h3>{card.content}</h3>
            <h3>{trans("Sr")}</h3>
          </Flex>
        ) : (
          <h3>{card.content}</h3>
        )}
      </div>
      <ProgressBar color={card.iconColor} />
      <div
        className="child"
        style={{
          width: mouseMove ? "300%" : "",
          height: mouseMove ? "300%" : "",
          top: yPosition,
          left: xPosition,
          zIndex: -1,
          background: card.iconColor,
        }}></div>
    </div>
  );
}
