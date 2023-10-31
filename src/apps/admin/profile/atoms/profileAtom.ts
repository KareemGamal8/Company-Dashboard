import { atom } from "@mongez/react-atom";
import { User } from "apps/admin/design-system/types/User";

export const profileAtom = atom<User>({
  key: "profile",
  default: {},
});
