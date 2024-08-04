import { ReactNode } from "react";

export interface FormProps {
  fields: ReactNode[];
  buttons: ReactNode[];
  icon: ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}