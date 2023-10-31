import { Box, Grid, Tooltip } from "@mantine/core";
import { trans } from "@mongez/localization";
import {
  SelectInput,
  SubmitButton,
  TextInput,
  parseError,
  toastError,
  toastSuccess,
} from "@mongez/moonlight";
import { Form } from "@mongez/react-form";
import { userAtom } from "apps/admin/design-system/atoms/user-atom";
import { profileAtom } from "apps/admin/profile/atoms/profileAtom";
import { editProfile } from "apps/admin/profile/services/profile-service";

export default function ProfileForm() {
  const profile = profileAtom.useValue();
  const submitProfileData = ({ values, form }) => {
    editProfile(values)
      .then(() => {
        toastSuccess("Profile data updated successfully");
        userAtom.merge(values);
        profileAtom.merge(values);
      })
      .catch(error => {
        toastError(parseError(error.response.data.message));
      })
      .finally(() => {
        form.submitting(false);
      });
  };

  return (
    <>
      <Form onSubmit={submitProfileData}>
        <Grid>
          <Grid.Col lg={6} md={12}>
            <TextInput
              name="first_name"
              placeholder={trans("firstName")}
              autoFocus
              defaultValue={profile.first_name}
              label={trans("firstName")}
            />
          </Grid.Col>
          <Grid.Col lg={6} md={12}>
            <TextInput
              name="last_name"
              placeholder={trans("last_name")}
              defaultValue={profile.last_name}
              label={trans("last_name")}
            />
          </Grid.Col>
          <Tooltip
            position="bottom-start"
            label={trans("changedByAdministration")}>
            <Grid.Col lg={6} md={12}>
              <TextInput
                name="email"
                disabled
                placeholder={trans("email")}
                defaultValue={profile.email}
                label={trans("email")}
              />
            </Grid.Col>
          </Tooltip>
          <Grid.Col lg={6} md={12}>
            <TextInput
              name="phone_number"
              placeholder={trans("phone_number")}
              defaultValue={profile.phone_number}
              label={trans("phone_number")}
            />
          </Grid.Col>
          <Grid.Col lg={6} md={12}>
            <SelectInput
              name="locale"
              data={["ar", "en"]}
              placeholder={trans("locale")}
              defaultValue={profile.locale}
              label={trans("locale")}
            />
          </Grid.Col>

          {/* <Grid.Col lg={6} md={12}>
            <PasswordStrength />
          </Grid.Col> */}
        </Grid>
        <Box my={20}>
          <SubmitButton>{trans("updateInfo")}</SubmitButton>
        </Box>
      </Form>
    </>
  );
}
