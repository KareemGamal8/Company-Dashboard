import { notificationsData } from "apps/admin/design-system/layouts/data";

export function getNotificationsList() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(notificationsData);
    }, 2000);
  });
}
