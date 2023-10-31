import {
  Box,
  clsx,
  Collapse,
  Group,
  Text,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import { Link } from "@mongez/react-router";
import { ChevronIcon } from "design-system/components/Icons";
import { SidebarLink } from "design-system/types/Sidebar";
import { useMemo, useState } from "react";
import BaseLink from "../../components/Link/Link";
import { drawerEvents } from "../Header/events";
import { itemsGroupStyle } from "./Sidebar.Style";

export default function SidebarItem({
  icon: Icon,
  label,
  defaultOpen = false,
  children,
  route,
  iconColor = "blue",
}: SidebarLink) {
  const { classes } = itemsGroupStyle();
  const [opened, open] = useState(defaultOpen);

  const [childrenItems, WrapperComponent] = useMemo(() => {
    if (!children) return [null, BaseLink];

    return [
      children.map((child, index) => (
        <Text
          component={Link}
          className={classes.link}
          onClick={() => drawerEvents.close()}
          to={child.route}
          key={index}>
          {child.label}
        </Text>
      )),
      Box,
    ];
  }, [children, classes.link]);

  const wrapperProps: any = {};

  if (!childrenItems) {
    wrapperProps.to = route;
    wrapperProps.onClick = () => drawerEvents.close();
  }

  return (
    <>
      <UnstyledButton onClick={() => open(!opened)} className={classes.control}>
        <WrapperComponent {...wrapperProps}>
          <Group position="apart" spacing={0}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {Icon && (
                <ThemeIcon variant="light" color={iconColor} size={30}>
                  <Icon size={18} />
                </ThemeIcon>
              )}
              <Box ml="md">{label}</Box>
            </Box>
            {children?.length && (
              <ChevronIcon
                className={clsx(classes.chevron, {
                  [classes.chevronOpened]: opened,
                })}
                size={14}
                stroke={1.5}
              />
            )}
          </Group>
        </WrapperComponent>
      </UnstyledButton>
      {children?.length ? (
        <Collapse in={opened}>{childrenItems}</Collapse>
      ) : null}
    </>
  );
}
