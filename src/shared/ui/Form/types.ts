import { ButtonProps } from "../Button/types";
import { InputProps } from "../Input/types";
import { SelectProps } from "../Select/types";

export interface FormProps {
  fields: Array<InputProps | SelectProps | ButtonProps>;
  onSubmitHandler: () => void;
}