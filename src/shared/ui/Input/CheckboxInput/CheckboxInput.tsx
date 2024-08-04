import { FC } from 'react';
import { InputProps } from '../types';
import classes from './CheckboxInput.module.scss';

const CheckboxInput: FC<Omit<InputProps, 'type'>> = ({onChange, name, id}) => {
  return (
    <input 
      type='checkbox'
      onChange={onChange}
      className={classes.input}
      name={name}
      id={id}
    >    
    </input>
  );
};

export default CheckboxInput;