import { Tabs } from "@mantine/core";
import { trans } from "@mongez/localization";
import { navigateTo } from "@mongez/react-router";
import React from "react";

export default function withTabs(tabsList: string[], urlsObject: any) {
  return function pageTabComponent(
    Component: React.ComponentType<any>,
    active: string,
  ): React.ComponentType {
    return function WithTabsComponents() {
      return (
        <>
          <Tabs
            defaultValue={active}
            onTabChange={(newTab: string) => navigateTo(urlsObject[newTab])}>
            <Tabs.List position="center">
              {tabsList.map(tab => (
                <Tabs.Tab key={tab} value={tab}>
                  {trans(tab)}
                </Tabs.Tab>
              ))}
            </Tabs.List>
            <Tabs.Panel value={active}>
              <Component />
            </Tabs.Panel>
          </Tabs>
        </>
      );
    };
  };
}
