import { FC } from 'react';
import { InputProps } from '../types';
import classes from './TextInput.module.scss';

const TextInput: FC<Omit<InputProps, 'type'>> = ({size, max_length, placeholder, onChange, name, id, value}) => {
  switch(size) {
    case 'large':
      return <input 
              type='text' 
              max={max_length}
              placeholder={placeholder}
              onChange={onChange}
              name={name}
              id={id}
              defaultValue={typeof value === 'string' ? value : ''}
              className={
                classes.input 
                + 
                ' ' 
                + 
                classes.input_large
              }></input>

    case 'normal':
      return <input 
              type='text' 
              max={max_length}
              placeholder={placeholder}
              onChange={onChange}
              name={name}
              id={id}
              defaultValue={typeof value === 'string' ? value : ''}
              className={
                classes.input 
                + 
                ' ' 
                + 
                classes.input_normal
              }></input>

    default:
      return null;
  }
};

export default TextInput;