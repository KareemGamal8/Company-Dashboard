import { Tooltip, UnstyledButton } from "@mantine/core";
import { useFullscreen } from "@mantine/hooks";
import { trans } from "@mongez/localization";
import { useHotKeys } from "@mongez/moonlight";
import { IconArrowsMinimize, IconMaximize } from "@tabler/icons-react";

export default function FullScreen() {
  const { toggle, fullscreen } = useFullscreen();

  useHotKeys({
    keys: ["f11"],
    callback: toggle,
  });

  return (
    <>
      {fullscreen ? (
        <Tooltip
          zIndex={310}
          withArrow
          label={trans("minimizeScreen") + " (F11)"}>
          <UnstyledButton>
            <IconArrowsMinimize cursor="pointer" onClick={toggle} />
          </UnstyledButton>
        </Tooltip>
      ) : (
        <Tooltip withArrow label={trans("maximizeScreen") + " (F11)"}>
          <UnstyledButton>
            <IconMaximize cursor="pointer" onClick={toggle} />
          </UnstyledButton>
        </Tooltip>
      )}
    </>
  );
}
