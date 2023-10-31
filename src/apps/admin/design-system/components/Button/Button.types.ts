import React from "react";

export type BaseButtonProps = {
  color:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | string;
  size: "xs" | "sm" | "md" | "lg" | "xl";
};

export type ColoredButton = Omit<BaseButtonProps, "color">;

export type PrimaryButtonProps = ColoredButton;
export type SecondaryButtonProps = ColoredButton;
export type WarningButtonProps = ColoredButton;
export type DangerButtonProps = ColoredButton;
export type InfoButtonProps = ColoredButton;
export type SuccessButtonProps = ColoredButton;
export type IconButtonProps = ColoredButton & {
  icon: React.ReactNode;
};
