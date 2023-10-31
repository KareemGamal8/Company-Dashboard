import { trans } from "@mongez/localization";
import { Image, PasswordInput, TextInput } from "@mongez/moonlight";
import { Form, HiddenInput } from "@mongez/react-form";
import { navigateTo } from "@mongez/react-router";
import {
  FormWrapper,
  SubmitButtonForm,
} from "apps/admin/account/components/AuthStyle";
import { UnStyledLink } from "apps/admin/design-system/components/Link/UnstyledLink";
import URLS from "apps/admin/utils/urls";
import { appName, logo } from "shared/flags";
import { forgetPasswordAtom } from "../../atom/forget-password-atom";
import { resetFormSubmit } from "../../helpers/accountFormSubmit";

export default function ResetPasswordPage() {
  const { email } = forgetPasswordAtom.value;

  if (!email) {
    navigateTo(URLS.login);
    return null;
  }

  return (
    <Form onSubmit={resetFormSubmit}>
      <FormWrapper>
        <UnStyledLink to={URLS.login}>
          <Image src={logo} width={150} m="auto" alt={appName} />
        </UnStyledLink>
        <HiddenInput value={email} name="email" />
        <TextInput autoFocus name="token" required placeholder={trans("otp")} />
        <PasswordInput
          name="password"
          id="password"
          required
          minLength={8}
          placeholder={trans("newPassword")}
        />
        <PasswordInput
          name="password_confirmation"
          placeholder={trans("confirmPassword")}
          required
          radius={2}
          minLength={8}
          match="password"
        />
        <SubmitButtonForm>{trans("send")}</SubmitButtonForm>
      </FormWrapper>
    </Form>
  );
}
