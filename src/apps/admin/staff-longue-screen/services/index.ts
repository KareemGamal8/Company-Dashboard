import { staffLoungeData } from "apps/admin/staff-longue-screen/data";

export const getStaffLoungeData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(staffLoungeData);
    }, 0);
  });
};
