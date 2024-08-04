import { userInfo } from "@/shared/consts";

export interface IContext {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  renderedUsers: userInfo[],
  setRenderedUsers: React.Dispatch<React.SetStateAction<userInfo[]>>
}