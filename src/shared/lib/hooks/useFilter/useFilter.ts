import { useEffect } from "react";
import { filterArray } from "../../helpers/filterArray";
import { userInfo } from "@/shared/consts";
import { useUsersContext } from "../UsersContext/useUsersContext";

export const useFilter = (arr: userInfo[], property: keyof userInfo, filter: any) => {
  const {setRenderedUsers} = useUsersContext()
  
  useEffect(() =>{
    const filteredArr = filterArray(arr, property, filter)
    setRenderedUsers(filteredArr);
  },[arr, property, filter])
};