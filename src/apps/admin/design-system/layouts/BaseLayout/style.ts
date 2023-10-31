import { createStyles } from "@mantine/core";

export const appShellStyle = createStyles(theme => ({
  main: {
    width: "100%",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
  },
}));
