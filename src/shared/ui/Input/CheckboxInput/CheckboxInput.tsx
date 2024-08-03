import { FC } from 'react';
import { InputProps } from '../types';
import classes from './CheckboxInput.module.scss';

const CheckboxInput: FC<Omit<InputProps, 'type'>> = () => {
  return (
    <input 
      type='checkbox'
      className={classes.input}
    >    
    </input>
  );
};

export default CheckboxInput;