import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  color?: 'green' | 'gray';
  active?: boolean;
  onClick: () => void;
}