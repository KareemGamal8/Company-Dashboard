import React, { ReactNode } from "react";
import "./ScrollPaper.css";

interface Props {
  children: ReactNode;
  style?: React.CSSProperties;
}

const ScrollPaper: React.FC<Props> = ({ style, children }) => {
  return (
    <div style={style} className="scroll-paper">
      <div className="scroll-content">{children}</div>
    </div>
  );
};

export default ScrollPaper;
