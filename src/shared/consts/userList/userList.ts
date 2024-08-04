import { defaultUserList } from "./defaultUserList";
import { userInfo } from "./types";

let savedUsers = localStorage.getItem('users');

export const userList: userInfo[] = savedUsers ? JSON.parse(savedUsers) : defaultUserList;