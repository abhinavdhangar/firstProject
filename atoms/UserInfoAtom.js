import { atom } from "recoil";

export const UserInfoAtom = atom({
  key: "UserInfoAtom",
  default: { loading: true },
});
