import { useContext } from "react";
import { UsersContext } from "./UsersContext";

export const useUsersContext = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUsersContext должен быть использован внутри провайдера!");
  }
  return context;
};