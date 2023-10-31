import { Drawer, Text } from "@mantine/core";
import { trans } from "@mongez/localization";
import {
  createReactForm,
  parseError,
  passwordInput,
  toastLoading,
} from "@mongez/moonlight";
import { useBooleanState, useEvent } from "@mongez/react-hooks";
import { changePassword } from "apps/admin/account/service/auth";
import user from "apps/admin/account/user";
import { mainTranslation } from "apps/admin/utils/locales";
import { changePasswordEvents } from "./events";

const UpdateProfileForm = createReactForm(reactiveForm => {
  reactiveForm
    .inModal(false)
    .col(12)
    .addWrapperProps({
      shadow: 0,
    })
    .onSubmit(({ values }) => {
      const loading = toastLoading(trans(mainTranslation.changingPassword));

      changePassword(values)
        .then(() => {
          loading.success(trans(mainTranslation.passwordChangedSuccessfully));
          changePasswordEvents.close();
        })
        .catch(error => {
          loading.error(parseError(error.response?.data.message));
        });
    })
    .setInputs([
      passwordInput("current_password").required(),
      passwordInput("password").required().confirmed(),
    ]);
});

export default function ChangePassword() {
  const [opened, open, close] = useBooleanState(false);

  useEvent(() => changePasswordEvents.onOpen(open));
  useEvent(() => changePasswordEvents.onClose(close));

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        overlayProps={{
          opacity: 0.3,
        }}
        transitionProps={{
          exitDuration: 300,
          duration: 300,
          transition: "slide-left",
        }}
        trapFocus={false}
        title={
          <Text size="xl" fw="bold">
            {trans("changePassword")}
          </Text>
        }
        padding="xs"
        size="md">
        <UpdateProfileForm record={user.all()} />
      </Drawer>
    </>
  );
}
