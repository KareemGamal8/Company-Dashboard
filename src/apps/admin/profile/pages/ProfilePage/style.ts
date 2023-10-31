import styled from "@emotion/styled";
import { Box, Button, Flex, Menu } from "@mantine/core";

export const ProfileContainer = styled<any>(Box)`
  label: ProfileContainer;
  padding: 1rem;
  position: relative;
  border-radius: 1.25rem;
`;

export const ProfileBackground = styled<any>(Box)`
  label: ProfileBackground;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 16rem;
  border-radius: 1.25rem;
`;

export const ProfileName = styled<any>(Flex)`
  label: ProfileName;
  gap: 0.5rem;
`;

export const MenuButtonDots = styled<any>(Button)`
  label: MenuButtonDots;
  background-color: #d8e0f9;
  transition: all 0.3s;
  svg {
    color: #1e3fb4;
    transition: all 0.3s;
  }
  :hover {
    background-color: #1e3fb4;
    svg {
      color: #d8e0f9;
    }
  }
`;

export const MenuItemWrapper = styled<any>(Menu.Item)`
  label: MenuItemWrapper;
  font-weight: 600;
  font-size: 1rem;
  svg {
    color: #1e3fb4;
  }
  :hover {
    color: #1e3fb4;
  }
`;
