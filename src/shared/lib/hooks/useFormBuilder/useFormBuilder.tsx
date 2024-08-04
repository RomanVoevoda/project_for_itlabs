import { ReactNode, useRef } from "react";
import { FormProps } from "../../../ui/Form/types";
import Form from '../../../ui/Form/Form';
import { Button, Input, Select } from "@/shared/ui";
import Icon from "@/shared/ui/Icon/Icon";


export const useFormBuilder = () => {
  const props = useRef<FormProps>(
    { fields: [], 
      buttons: [], 
      icon: null, 
      id: '',
      fieldsContainerId: '', 
      onSubmit: () => {}
    } as FormProps);

  const builder = {
    setInput: (type: 'text' | 'checkbox', size?: 'normal' | 'large', max_length?: number, title?: string ) => {
      if(title) props.current.fields.push(
        <p>
          {title}
        </p>
      )

      props.current.fields.push(
        <Input 
          title={title}
          type={type}
          size={size}
          max_length={max_length}
        />
      );

      return builder;
    },

    setSelect: (options: string[], default_option: string, title?: string) => {
      if(title) props.current.fields.push(
        <p>
          {title}
        </p>
      )

      props.current.fields.push(
        <Select 
          options={options}
          default_option={default_option}
          title={title}
        />
      );

      return builder;
    },

    setButton: (
      children: ReactNode, 
      type: "primary" | "transparent", 
      onClick: () => void,  
      color?: 'green' | 'gray',
      active?: boolean,
      submit?: boolean) => {

      props.current.buttons.push(
        <Button
          type={type}
          onClick={onClick}
          color={color}
          active={active}
          submit={submit}
        >
          {children}
        </Button>
      );

      return builder;
    },

    setClosingIcon: (type: 'x-mark', closeForm: () => void) => {
      props.current.icon = <Icon type={type} onClick={closeForm}/>

      return builder;
    },

    setForm: (id: string, fieldsContainerId: string, onSubmit: () => void) => {
      props.current.id = id;
      props.current.onSubmit = onSubmit;
      props.current.fieldsContainerId = fieldsContainerId;

      return builder;
    },

    build: () => <Form {...props.current} />,
    
    clearRefs: () => {
      props.current.fields = [];
      props.current.buttons = [];
      props.current.icon = null;
      props.current.id = '';
      props.current.onSubmit = () => {};
    }
  }

  return builder;
}