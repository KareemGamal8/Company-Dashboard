import { Avatar, Flex, Group, Menu, Text, UnstyledButton } from "@mantine/core";
import { trans } from "@mongez/localization";
import {
  IconChevronDown,
  IconLock,
  IconLogout,
  IconSettings,
} from "@tabler/icons-react";
import { performLogout } from "apps/admin/account/helpers/accountFormSubmit";
import user from "apps/admin/account/user";
import { UnStyledLink } from "apps/admin/design-system/components/Link/UnstyledLink";
import URLS from "apps/admin/utils/urls";
import { useState } from "react";
import ChangePassword from "./ChangePassword";
import { changePasswordEvents } from "./events";

export default function ProfileDropdown() {
  const [opened, setOpened] = useState(false);

  return (
    <Group>
      <Menu
        opened={opened}
        onChange={setOpened}
        width={200}
        transitionProps={{
          transition: "pop-top-right",
        }}
        position="bottom-end">
        <Menu.Target>
          <UnstyledButton>
            <Group spacing={7}>
              <Avatar
                src={user.get("image")}
                alt="user"
                radius="xl"
                size={30}
              />
              <Flex gap={3}>
                <Text weight={600} size="sm" sx={{ lineHeight: 1 }}>
                  {user.get("name")}
                </Text>
              </Flex>
              <IconChevronDown size={12} stroke={1.5} />
            </Group>
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>{trans("settings")}</Menu.Label>
          <UnStyledLink to={URLS.profile}>
            <Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>
              {trans("accountSettings")}
            </Menu.Item>
          </UnStyledLink>

          <Menu.Item
            onClick={changePasswordEvents.open}
            icon={<IconLock size={14} stroke={1.5} />}>
            {trans("changePassword")}
          </Menu.Item>
          <Menu.Item
            onClick={performLogout}
            color="red"
            icon={<IconLogout size={14} stroke={1.5} />}>
            {trans("logout")}
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <ChangePassword />
    </Group>
  );
}
