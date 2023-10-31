import { ActionIcon, Avatar, Flex, Text, Tooltip } from "@mantine/core";
import { trans } from "@mongez/localization";
import { readMoreChars } from "@mongez/reinforcements";
import { IconChecks, IconCircle } from "@tabler/icons-react";
import { NotificationTypes } from "apps/admin/design-system/types";
import { useState } from "react";
import {
  MenuItem,
  ReadableTitle,
  UnReadMenuItem,
  UnReadableIcon,
} from "./style";

export default function NotificationItem({
  notification,
}: {
  notification: NotificationTypes;
}) {
  const [isRead, setIsRead] = useState(notification.isReadable);

  const markAsRead = () => {
    setIsRead(false);
  };

  return (
    <>
      {!isRead && (
        <MenuItem p="1rem">
          <Flex align="center" gap="0.5rem">
            <Avatar src={notification.avatar} alt="user" w={40} h={40} />
            <Flex direction="column" gap="0.1rem" c="gray.2">
              <Text component="p" fz="0.8rem" fw={600} m={0} c="gray.6">
                {readMoreChars(notification.title, 30)}
              </Text>
              <Text span fz="0.7rem" c="gray.6">
                {notification.createdAt}
              </Text>
            </Flex>
          </Flex>
        </MenuItem>
      )}
      {isRead && (
        <UnReadMenuItem p="1rem">
          <Flex justify="space-between" align="center">
            <Flex align="center" gap="0.5rem">
              <Avatar src={notification.avatar} alt="user" w={40} h={40} />
              <Flex direction="column" gap="0.1rem">
                <ReadableTitle component="p" fz="0.8rem" fw={600} m={0}>
                  {readMoreChars(notification.title, 30)}
                </ReadableTitle>
                <Text span fz="0.7rem" c="gray.6">
                  {notification.createdAt}
                </Text>
                <Flex>
                  <Tooltip label={trans("markAsRead")}>
                    <ActionIcon onClick={markAsRead}>
                      <IconChecks />
                    </ActionIcon>
                  </Tooltip>
                </Flex>
              </Flex>
            </Flex>
            <UnReadableIcon justify="center" align="center">
              <IconCircle size={15} color="#1e3fb4" fill="#1e3fb4" />
            </UnReadableIcon>
          </Flex>
        </UnReadMenuItem>
      )}
    </>
  );
}
