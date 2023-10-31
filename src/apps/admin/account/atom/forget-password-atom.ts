import { atom } from "@mongez/react-atom";

export const forgetPasswordAtom = atom({
  key: "auth",
  default: {
    email: "",
    code: "",
  },
});
