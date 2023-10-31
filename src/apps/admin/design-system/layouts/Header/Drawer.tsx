import {
  Burger,
  Drawer as CustomDrawer,
  Divider,
  Flex,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { current } from "@mongez/react";
import { useEvent } from "@mongez/react-hooks";
import { Link } from "@mongez/react-router";
import DirectionSettings from "apps/admin/design-system/layouts/DashboardSettings/DirectionSettings";
import URLS from "apps/admin/utils/urls";
import { useState } from "react";
import { logo } from "shared/flags";
import Sidebar from "../Sidebar";
import { drawerEvents } from "./events";

const directionIs = (direction: "ltr" | "rtl") =>
  current("direction") === direction;

export default function Drawer() {
  const theme = useMantineTheme();
  const isDarkMode = theme.colorScheme === "dark";
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  const isMobile = useMediaQuery("(max-width: 500px)");

  useEvent(() => drawerEvents.onClose(() => setOpened(false)));

  return (
    <>
      <div>
        <Burger
          sx={(theme: any) => ({
            [theme.fn.largerThan("md")]: { display: "none" },
          })}
          opened={opened}
          onClick={() => setOpened(true)}
          title={title}
        />
      </div>
      <CustomDrawer
        title={
          <>
            <Flex justify="space-between" gap={210}>
              <Link to={URLS.home} title="1Pass">
                <img src={logo} alt="1Pass" width={50} />
              </Link>
              {isMobile && <DirectionSettings />}
            </Flex>
            <Divider w="100%" color="#ccc" my={10} />
          </>
        }
        size="sm"
        padding="sm"
        opened={opened}
        overlayProps={{
          blur: 3,
          opacity: 0.55,
          color: isDarkMode ? theme.colors.dark[9] : theme.colors.gray[2],
        }}
        transitionProps={{
          exitDuration: 300,
          duration: 300,
          transition: directionIs("ltr") ? "skew-up" : "skew-down",
        }}
        onClose={() => setOpened(false)}
        dir={directionIs("ltr") ? "left" : "right"}>
        <Sidebar />
      </CustomDrawer>
    </>
  );
}
