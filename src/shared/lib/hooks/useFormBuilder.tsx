import { useRef } from "react";
import { FormProps } from "../../ui/Form/types";
import { ButtonProps } from "../../ui/Button/types";
import { InputProps } from "../../ui/Input/types";
import Form from '../../ui/Form/Form';
import { SelectProps } from "../../ui/Select/types";


export const useFormBuilder = () => {
  const props = useRef<FormProps>({} as FormProps);

  const builder = {
    setInput: (input: InputProps) => {
      if(input) props.current.fields.push(input);

      return builder;
    },

    setSelect: (select: SelectProps) => {
      if(select) props.current.fields.push(select);
    },

    setButton: (button: ButtonProps) => {
      if(button) props.current.fields.push(button);

      return builder;
    },

    build: () => <Form {...props.current} />,
    
    clearRefs: () => {
      props.current = {} as FormProps
    }
  }

  return builder;
}