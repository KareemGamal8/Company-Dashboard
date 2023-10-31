import { ActionIcon, Box, Tooltip, useMantineColorScheme } from "@mantine/core";
import { trans } from "@mongez/localization";
import { modButtons, themeAtom, useHotKeys } from "@mongez/moonlight";
import Is from "@mongez/supportive-is";
import { IconMoon, IconSun } from "@tabler/icons-react";

const shortcut = Is.desktop() ? modButtons(["j"]) : "";

export default function ToggleDarkMode() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  useHotKeys({
    keys: ["mod", "j"],
    callback: () => {
      toggleColorScheme(
        themeAtom.get("colorScheme") === "dark" ? "light" : "dark",
      );
    },
  });

  const Icon = isDark ? IconSun : IconMoon;

  return (
    <Box
      sx={(theme: any) => ({
        [theme.fn.smallerThan("lg")]: { display: "none" },
      })}>
      <Tooltip
        position="bottom"
        withArrow
        label={
          <>
            {trans("switchToStyleMode", {
              mode: colorScheme === "dark" ? "light" : "dark",
            })}{" "}
            {shortcut}
          </>
        }>
        <ActionIcon color={isDark ? "yellow.7" : undefined}>
          <Icon
            cursor="pointer"
            onClick={() => toggleColorScheme(isDark ? "light" : "dark")}
            size={20}
          />
        </ActionIcon>
      </Tooltip>
    </Box>
  );
}
