import { userInfo } from "@/shared/consts";

export interface IContext {
  renderedUsers: userInfo[],
  setRenderedUsers: React.Dispatch<React.SetStateAction<userInfo[]>>
}