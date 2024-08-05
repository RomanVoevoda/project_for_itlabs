import { FC } from 'react';
import { InputProps } from './types';
import TextInput from './TextInput/TextInput';
import CheckboxInput from './CheckboxInput/CheckboxInput';


const Input: FC<InputProps> = ({type, size, placeholder, max_length, onChange, name, id, value}) => {
  switch(type) {
    case 'text':
      return <TextInput 
                size={size} 
                placeholder={placeholder} 
                max_length={max_length} 
                onChange={onChange}
                name={name} 
                id={id}
                value={value}
              />
              
    case 'checkbox':
      return <CheckboxInput onChange={onChange} name={name} id={id} value={value}/>
    default:
      return null;
  }
};

export default Input;