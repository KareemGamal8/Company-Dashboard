import { Tooltip as CustomTolTip, TooltipProps } from "@mantine/core";
import React from "react";

function _Tooltip({ children, label, ...otherProps }: TooltipProps, ref) {
  return (
    <span ref={ref}>
      <CustomTolTip withArrow label={label} {...otherProps}>
        {children}
      </CustomTolTip>
    </span>
  );
}

const Tooltip: React.FC<TooltipProps> = React.forwardRef(_Tooltip);

Tooltip.defaultProps = {
  position: "top",
};

export default Tooltip;
