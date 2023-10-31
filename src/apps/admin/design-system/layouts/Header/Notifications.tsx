import {
  Flex,
  Indicator,
  Menu,
  ScrollArea,
  Skeleton,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { current } from "@mongez/react";
import { IconArrowLeft, IconArrowRight, IconBell } from "@tabler/icons-react";
import { getNotificationsList } from "design-system/layouts/services/notifications-services";
import { NotificationTypes } from "design-system/types";
import { useState } from "react";
import NotificationItem from "./NotificationItem";
import { AllNotifications, NotificationsButton, menuStyles } from "./style";

export default function Notifications() {
  const [notifications, setNotifications] = useState<NotificationTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery("(max-width: 600px)");

  getNotificationsList().then((response: any) => {
    setLoading(false);
    setNotifications(response);
  });

  if (!notifications) return null;

  const unreadableNotifications = notifications.filter(
    (notification: any) => notification.isReadable === true,
  );

  return (
    <Flex justify="center" align="center">
      <Menu
        withArrow
        closeOnItemClick={false}
        styles={menuStyles}
        width={isMobile ? "100%" : 350}
        transitionProps={{ transition: "pop", duration: 150 }}
        offset={25}>
        <Menu.Target>
          <Indicator
            disabled={unreadableNotifications.length === 0 ? true : false}
            inline
            processing
            label={unreadableNotifications.length}
            size={18}
            color="#FFBC11">
            <NotificationsButton w="fit-content">
              <IconBell />
            </NotificationsButton>
          </Indicator>
        </Menu.Target>
        <Menu.Dropdown>
          {loading && (
            <>
              <Skeleton animate={false} height={50} circle mb="xl" />
              <Skeleton animate={false} height={8} radius="xl" />
              <Skeleton animate={false} height={8} mt={6} radius="xl" />
              <Skeleton
                animate={false}
                height={8}
                mt={6}
                width="70%"
                radius="xl"
              />
            </>
          )}
          {!loading && (
            <ScrollArea h={320}>
              {notifications.map((notification: any) => {
                return (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                  />
                );
              })}
            </ScrollArea>
          )}
          <Menu.Item mt="0.5rem" p="0 0 0.5rem 0">
            <AllNotifications
              justify="center"
              pt="1rem"
              gap="0.5rem"
              align="center">
              <Text c="#1E3FB4" fz="lg" span>
                See all notifications
              </Text>
              {current("localeCode") === "en" ? (
                <IconArrowRight size={18} />
              ) : (
                <IconArrowLeft size={18} />
              )}
            </AllNotifications>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Flex>
  );
}
