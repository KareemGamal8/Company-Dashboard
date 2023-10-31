import { BaseInput, BaseInputProps } from "@mongez/moonlight";
import { emailRule, requiredRule } from "@mongez/react-form";

export function EmailInputTest(props: BaseInputProps) {
  if (props.defaultValue) return;

  return <BaseInput {...props} />;
}

EmailInputTest.defaultProps = {
  type: "email",
  rules: [requiredRule, emailRule],
};
