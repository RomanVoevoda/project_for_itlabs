import { createContext } from "react";
import { IContext } from "./types";

export const CountContext = createContext<IContext | undefined>(undefined);