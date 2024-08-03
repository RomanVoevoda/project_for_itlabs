import { FC } from 'react';
import classes from './Select.module.scss';
import { SelectProps } from './types';

const Select: FC<SelectProps> = ({default_option, options}) => {
  return (
    <select 
      className={classes.select}
    >
      <option 
        value=""
        className={classes.select__option}
      >
        {default_option}
      </option>
      {options.map(option =>
        <option 
          className={classes.select__option}
          key={option}
        >
          {option}
        </option>
      )}
    </select>
  );
};

export default Select;