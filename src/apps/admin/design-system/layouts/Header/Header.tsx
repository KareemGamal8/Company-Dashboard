import {
  ActionIcon,
  Burger,
  Header as CustomHeader,
  Group,
  MediaQuery,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Link } from "@mongez/react-router";
import { SidebarToggleAtom } from "apps/admin/design-system/atoms/sidebar-toggle-atom";
import DirectionSettings from "apps/admin/design-system/layouts/DashboardSettings/DirectionSettings";
import Notifications from "apps/admin/design-system/layouts/Header/Notifications";
import SwitchAccount from "apps/admin/design-system/layouts/Header/SwitchAccount";
import URLS from "apps/admin/utils/urls";
import { logo } from "shared/flags";
import Drawer from "./Drawer";
import ProfileDropdown from "./ProfileDropdown";
import ToggleDarkMode from "./ToggleDarkMode";
import { headerStyle } from "./style";

function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";
  const isMobile = useMediaQuery("(max-width: 500px)");

  return (
    <CustomHeader style={headerStyle} height={60} p="xs">
      <Group noWrap>
        {!isMobile && (
          <Link to={URLS.home} title="1Pass">
            <img src={logo} alt="1Pass" width={50} />
          </Link>
        )}
        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
          <ActionIcon color="dark" onClick={SidebarToggleAtom.toggle}>
            <Burger opened={opened} onClick={toggle} aria-label={label} />
          </ActionIcon>
        </MediaQuery>
        <Drawer />
      </Group>
      <Group noWrap>
        <ToggleDarkMode />
        {!isMobile && <DirectionSettings />}
        <SwitchAccount />
        <Notifications />
        <ProfileDropdown />
      </Group>
    </CustomHeader>
  );
}

export default Header;
