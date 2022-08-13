import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  dafault: { isAdmin: false }
});
