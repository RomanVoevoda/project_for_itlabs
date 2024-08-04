import { useEffect } from "react";
import { useCountContext } from "../CountContext/useCountContext";
import { filterArray } from "../../helpers/filterArray";
import { userInfo } from "@/shared/consts";

export const useFilter = (arr: userInfo[], property: keyof userInfo, filter: any) => {
  const {count, setCount, setRenderedUsers} = useCountContext()
  
  useEffect(() =>{
    const filteredArr = filterArray(arr, property, filter)
    setRenderedUsers(filteredArr);
  },[arr, property, filter])
};