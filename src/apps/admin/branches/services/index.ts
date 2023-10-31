import { branchesData } from "apps/admin/branches/data";

export const getBranchesData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(branchesData);
    }, 0);
  });
};
