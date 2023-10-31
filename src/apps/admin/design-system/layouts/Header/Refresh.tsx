import { Tooltip, UnstyledButton } from "@mantine/core";
import { trans } from "@mongez/localization";
import { refresh } from "@mongez/react-router";
import { IconRefresh } from "@tabler/icons-react";

export default function Refresh() {
  const refreshPage = () => {
    refresh();
  };
  return (
    <Tooltip zIndex={310} withArrow label={trans("refresh")}>
      <UnstyledButton>
        <IconRefresh cursor="pointer" onClick={refreshPage} />
      </UnstyledButton>
    </Tooltip>
  );
}
