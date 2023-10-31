import { Navbar, ScrollArea } from "@mantine/core";
import user from "apps/admin/account/user";
import { sidebarLinks } from "apps/admin/data/sidebar-items";
import { useMemo } from "react";
import { SidebarLink } from "../../types/Sidebar";
import { itemsStyle } from "./Sidebar.Style";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const { classes } = itemsStyle();
  const sidebarItems = sidebarLinks();

  const itemsList = useMemo(() => {
    const finalSidebarItems: SidebarLink[] = [];

    for (const item of sidebarItems) {
      if (item.permission) {
        if (user.can(item.permission)) {
          finalSidebarItems.push(item);
        }
      } else if (item.children) {
        const children = item.children.filter(child => {
          if (child.permission) {
            return user.can(child.permission);
          }

          return true;
        });

        if (children.length > 0) {
          finalSidebarItems.push({ ...item, children });
        }
      } else {
        finalSidebarItems.push(item);
      }
    }

    return finalSidebarItems.map((item, index) => (
      <SidebarItem {...item} key={index} />
    ));
  }, [sidebarItems]);

  return (
    <Navbar width={{ sm: 260 }} className={classes.navbar}>
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{itemsList}</div>
      </Navbar.Section>
    </Navbar>
  );
}
