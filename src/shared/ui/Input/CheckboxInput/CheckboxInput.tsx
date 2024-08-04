import { FC } from 'react';
import { InputProps } from '../types';
import classes from './CheckboxInput.module.scss';

const CheckboxInput: FC<Omit<InputProps, 'type'>> = ({onChange}) => {
  return (
    <input 
      type='checkbox'
      onChange={onChange}
      className={classes.input}
    >    
    </input>
  );
};

export default CheckboxInput;