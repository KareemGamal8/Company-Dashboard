import { FormControlProps } from "@mongez/react-form";

/**
 * CheckBox Props
 */
export type CheckBoxAllProps = [
  items: { label: string; checked: boolean; key: string },
];

/**
 * Base Input Props
 */
export type BaseInputProps = FormControlProps & {
  description?: React.ReactNode;
};
