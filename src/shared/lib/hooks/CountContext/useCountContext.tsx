import { useContext } from "react";
import { CountContext } from "./CountContext";

export const useCountContext = () => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCountContext must be used within a CountProvider");
  }
  return context;
};