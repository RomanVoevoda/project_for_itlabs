import { FC } from 'react';
import { InputProps } from './types';
import TextInput from './TextInput/TextInput';
import CheckboxInput from './CheckboxInput/CheckboxInput';


const Input: FC<InputProps> = ({type, size, placeholder, max_length}) => {
  switch(type) {
    case 'text':
      return <TextInput size={size} placeholder={placeholder} max_length={max_length}/>
    case 'checkbox':
      return <CheckboxInput />
    default:
      return null;
  }
};

export default Input;