import { trans } from "@mongez/localization";
import { IconList, IconReport, IconUsers } from "@tabler/icons-react";
import URLS from "app/utils/urls";
import { SidebarLink } from "design-system/types/Sidebar";

export const sidebarLinks = (): SidebarLink[] => [
  {
    label: trans("dashboard"),
    route: URLS.home,
    icon: IconReport,
    iconColor: "green",
  },
  {
    label: trans("employees"),
    route: URLS.users,
    icon: IconUsers,
    iconColor: "blue",
  },
  {
    label: trans("checkInHistory"),
    route: URLS.checkInHistory,
    icon: IconList,
    iconColor: "cyan",
  },
  // {
  //   label: trans("branches"),
  //   route: URLS.branches,
  //   icon: IconFireHydrant,
  //   iconColor: "red",
  // },
  // {
  //   label: trans("profile"),
  //   route: URLS.profile,
  //   icon: IconUsers,
  //   iconColor: "grape",
  // },
  // {
  //   label: trans("staffLounge"),
  //   route: URLS.staffLongueScreen,
  //   icon: IconUsers,
  //   iconColor: "grape",
  // },
];
