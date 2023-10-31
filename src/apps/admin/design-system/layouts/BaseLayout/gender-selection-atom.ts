import { atom } from "@mongez/react-atom";

export const gymSelectionAtom = atom({
  key: "gymSelection",
  default: {
    isOpened: false,
    dismissAble: false,
    open() {
      gymSelectionAtom.change("isOpened", true);
    },
    close() {
      gymSelectionAtom.change("isOpened", false);
    },
  },
});
