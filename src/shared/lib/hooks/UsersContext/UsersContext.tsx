import { createContext } from "react";
import { IContext } from "./types";

export const UsersContext = createContext<IContext | undefined>(undefined);