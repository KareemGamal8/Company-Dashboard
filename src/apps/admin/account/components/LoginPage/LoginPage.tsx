import { Flex, Title } from "@mantine/core";
import { trans } from "@mongez/localization";
import { EmailInput, PasswordInput } from "@mongez/moonlight";
import { Form } from "@mongez/react-form";
import Helmet from "@mongez/react-helmet";
import { performLogin } from "app/account/helpers/accountFormSubmit";
import URLS from "apps/admin/utils/urls";
import BaseLayout from "design-system/layouts/BaseLayout";
import { logo } from "shared/flags";
import {
  ForgetPasswordLink,
  FormWrapper,
  SubmitButtonForm,
} from "../AuthStyle";

export default function LoginPage() {
  return (
    <BaseLayout>
      <Helmet title={trans("login")} />
      <Form onSubmit={performLogin}>
        <FormWrapper>
          <Flex justify="center" align="center" gap="0.5rem" direction="column">
            <img src={logo} alt="logo" width={150} />
            <Title order={5}>{trans("signInYourAccount")}</Title>
          </Flex>
          <EmailInput
            name="email"
            placeholder={trans("email")}
            autoFocus
            label={trans("email")}
            required
          />
          <PasswordInput
            label={trans("password")}
            placeholder={trans("password")}
            required
            name="password"
            mt="1rem"
          />
          <ForgetPasswordLink
            to={URLS.forgotPassword}
            ta="start"
            fw="500"
            c="#7e7e7e"
            fz="0.8rem">
            {trans("forgotPassword")}
          </ForgetPasswordLink>
          <SubmitButtonForm> {trans("signMeIn")}</SubmitButtonForm>
        </FormWrapper>
      </Form>
    </BaseLayout>
  );
}
