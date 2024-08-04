import { FC } from 'react';
import classes from './Select.module.scss';
import { SelectProps } from './types';

const Select: FC<SelectProps> = ({default_option, options, name, id}) => {
  return (
    <select 
      className={classes.select}
      name={name}
      id={id}
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