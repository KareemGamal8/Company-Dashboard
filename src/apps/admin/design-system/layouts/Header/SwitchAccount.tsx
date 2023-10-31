import { Flex, Group, Menu, Tooltip, UnstyledButton } from "@mantine/core";
import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import { IconLock } from "@tabler/icons-react";
import { useState } from "react";

export default function SwitchAccount() {
  const [opened, setOpened] = useState(false);
  const [data, setData] = useState([]);

  // const switchAccount = () => {
  //   getUserGym().then(response => {
  //     setData(response.data);
  //   });
  // };
  // useOnce(switchAccount);

  return (
    <Group>
      <Menu
        opened={opened}
        onChange={setOpened}
        width={200}
        transitionProps={{
          transition: "pop-top-right",
        }}
        position="bottom">
        <Menu.Target>
          <Tooltip zIndex={310} withArrow label={trans("switchAccount")}>
            <UnstyledButton>
              <Flex align="center" gap={5}></Flex>
            </UnstyledButton>
          </Tooltip>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>{trans("switchAccount")}</Menu.Label>
          {data.map((item: any) => (
            <Menu.Item key={item.id} icon={<IconLock size={14} stroke={1.5} />}>
              {current("localeCode") === "en" ? item.en_name : item.ar_name}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
