import styled from "@emotion/styled";
import { Button, Menu } from "@mantine/core";

export const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow:
    "0px 2px 4px -1px rgb(0 0 0 / 10%), 0px 4px 5px 0px rgb(0 0 0 / 0%), 0px 1px 10px 0px rgb(0 0 0 / 3%)",
};

import { Flex, Text } from "@mantine/core";

export const menuStyles = {
  item: {
    margin: "0.5rem 0",
  },
};

export const NotificationsButton = styled<any>(Button)`
  label: MenuButtonDots;
  background-color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.colors.dark[6] : "#d8e0f9"};
  height: 2rem !important;
  width: 2rem !important;
  transition: all 0.3s;
  padding: 0 !important;
  border-radius: 0.625rem;
  svg {
    color: ${({ theme }) =>
      theme.colorScheme === "dark" ? "#d8e0f9" : "#1e3fb4"};
    transition: all 0.3s;
  }
  :hover {
    background-color: ${({ theme }) =>
      theme.colorScheme === "dark" ? theme.colors.dark[6] : "#d8e0f9"};
  }
`;

export const UnReadMenuItem = styled<any>(Menu.Item)`
  label: UnReadMenuItem;
  border-bottom: 1px solid
    ${({ theme }) =>
      theme.colorScheme === "dark" ? "#59595924" : theme.colors.gray[3]};
  background: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]};
  :hover {
    background: ${({ theme }) =>
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[2]};
  }
`;

export const MenuItem = styled<any>(Menu.Item)`
  label: MenuItem;
  border-bottom: 1px solid
    ${({ theme }) =>
      theme.colorScheme === "dark" ? "#59595924" : theme.colors.gray[3]};
`;

export const ReadableTitle = styled<any>(Text)`
  label: ReadableTitle;
  color: ${({ theme }) =>
    theme.colorScheme === "dark" ? "#D8E0F9" : "#3d4465"};
`;

export const AllNotifications = styled<any>(Flex)`
  label: AllNotifications;
  cursor: pointer;
  border-top: 1px solid
    ${({ theme }) =>
      theme.colorScheme === "dark" ? "#59595924" : theme.colors.gray[3]};
  span,
  svg {
    color: ${({ theme }) =>
      theme.colorScheme === "dark" ? "#D8E0F9" : "#1e3fb4"};
  }
`;

export const UnReadableIcon = styled<any>(Flex)`
  label: UnReadableIcon;
  background-color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]};
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  padding: 0.1rem;
`;
