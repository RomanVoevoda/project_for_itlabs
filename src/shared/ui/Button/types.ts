import { ReactNode } from "react";

export interface ButtonProps extends Props{
  type: "primary" | "transparent";
}

interface Props {
  children: ReactNode;
  color?: 'green' | 'gray';
  active?: boolean;
  onClick: () => void;
  submit?: boolean;
}