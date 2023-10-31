import { Button, ButtonProps } from "@mantine/core";

const BaseButton = Button;

export default BaseButton;

export const PrimaryButton = Button;

// Let's clone Button props type and extend it with HTML Button props
export type BaseButtonProps = ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
