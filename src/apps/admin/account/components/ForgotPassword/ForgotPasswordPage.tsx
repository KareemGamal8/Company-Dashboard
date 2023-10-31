import { Flex, Title } from "@mantine/core";
import { trans } from "@mongez/localization";
import { EmailInput, Image } from "@mongez/moonlight";
import { Form, HiddenInput } from "@mongez/react-form";
import {
  ForgetPasswordLink,
  FormWrapper,
  SubmitButtonForm,
} from "apps/admin/account/components/AuthStyle";
import { UnStyledLink } from "apps/admin/design-system/components/Link/UnstyledLink";
import { appName, logo } from "shared/flags";
import URLS from "../../../utils/urls";
import { forgotPasswordSubmit } from "../../helpers/accountFormSubmit";

export default function ForgotPasswordPage() {
  return (
    <Form onSubmit={forgotPasswordSubmit}>
      <HiddenInput name="type" value="code" />
      <FormWrapper>
        <Flex justify="center" align="center" gap="0.5rem" direction="column">
          <UnStyledLink to={URLS.login}>
            <Image src={logo} width={150} m="auto" alt={appName} />
          </UnStyledLink>
          <Title order={5}>{trans("forgotPassword")}</Title>
        </Flex>
        <EmailInput
          name="email"
          required
          placeholder={trans("email")}
          autoFocus
        />
        <ForgetPasswordLink
          to={URLS.login}
          ta="start"
          fw="500"
          c="#7e7e7e"
          fz="0.8rem">
          {trans("backToLogin")}
        </ForgetPasswordLink>
        <SubmitButtonForm>{trans("send")}</SubmitButtonForm>
      </FormWrapper>
    </Form>
  );
}
