import { Avatar, Box, Container, Flex, Text, Tooltip } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import cache from "@mongez/cache";
import { trans } from "@mongez/localization";
import { parseError, toastError, toastSuccess } from "@mongez/moonlight";
import { preload } from "@mongez/react-utils";
import { userAtom } from "apps/admin/design-system/atoms/user-atom";
import { gymCacheKey } from "apps/admin/design-system/components/SelectedGym/SelectedGym";
import SwitchAccount from "apps/admin/design-system/layouts/Header/SwitchAccount";
import { profileAtom } from "apps/admin/profile/atoms/profileAtom";
import ProfileForm from "apps/admin/profile/components/ProfileForm";
import {
  editProfileImage,
  getProfilesList,
} from "apps/admin/profile/services/profile-service";
import { useState } from "react";
import { ProfileBackground, ProfileContainer, ProfileName } from "./style";

function _ProfilePage() {
  const isMobile = useMediaQuery("(max-width:800px)");
  const branchLogo = cache.get(gymCacheKey)?.cover_url["1x"];
  const profileData = profileAtom.useValue();
  const [image, setImage] = useState<any>(profileData.icon_url["1x"]);

  const submitProfileImage = e => {
    setImage(URL.createObjectURL(e.target.files[0]));
    const formData = new FormData();
    formData.append("profilePicture", e.target.files[0]);
    editProfileImage(formData)
      .then(() => {
        toastSuccess(trans("imageUpdatedSuccessfully"));
        userAtom.update({
          ...userAtom.value,
          icon_url: {
            "1x": URL.createObjectURL(e.target.files[0]),
          },
        });
        profileAtom.update({
          ...userAtom.value,
          icon_url: {
            "1x": URL.createObjectURL(e.target.files[0]),
          },
        });
      })
      .catch(error => {
        toastError(parseError(error.response?.data.message));
      });
  };

  return (
    <Box p="0.5rem">
      <Container size="xl">
        <ProfileContainer>
          <ProfileBackground
            style={{
              backgroundImage: `url(${branchLogo})`,
            }}></ProfileBackground>
          <Flex justify="space-between" p="1rem " align="center">
            <Flex
              w={isMobile ? "100%" : "auto"}
              align={isMobile ? "center" : "flex-start"}
              direction={isMobile ? "column" : "row"}
              ta={isMobile ? "center" : "start"}>
              <Tooltip label={trans("chooseImage")} position="bottom" withArrow>
                <Box mt="-3.5rem">
                  <Avatar
                    src={image || ""}
                    alt="profile"
                    size={70}
                    radius="50%"
                    style={{
                      cursor: "pointer",
                      objectFit: "cover",
                    }}
                  />
                  <Box pos="relative">
                    <input
                      type="file"
                      id="file-input"
                      onChange={submitProfileImage}
                    />
                  </Box>
                </Box>
              </Tooltip>
              <Flex justify="space-between" w="100%">
                <ProfileName fz="1.125rem" fw={600}>
                  <Text>{profileData.last_name}</Text>
                  <Text>{profileData.first_name}</Text>
                </ProfileName>
              </Flex>
            </Flex>
            <Box>
              <SwitchAccount />
            </Box>
          </Flex>
          <ProfileForm />
        </ProfileContainer>
      </Container>
    </Box>
  );
}

const ProfilePage = preload(_ProfilePage, getProfilesList, {
  onSuccess: response => {
    profileAtom.update(response.data);
  },
});

export default ProfilePage;
