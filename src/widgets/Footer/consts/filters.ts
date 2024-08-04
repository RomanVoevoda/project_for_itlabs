import { userList } from "@/shared/consts";
import { filtersTuple } from "../types/types";

export const onlineFilter: filtersTuple = [
  userList,
  'online',
  true
]

export const offlineFilter: filtersTuple = [
  userList,
  'online',
  false
]

export const noFilter: filtersTuple = [
  userList,
  'filterOff',
  undefined
]