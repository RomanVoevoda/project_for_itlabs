import { FC } from 'react';
import { ButtonProps } from '../types';
import classes from './TransparentButton.module.scss';

const TransparentButton: FC<Omit<ButtonProps, 'type'>> = ({children, onClick, active}) => {
  return (
    active
    ?
    <button 
      className={
        classes.button 
        + 
        ' ' 
        + 
        classes.button_active
      }
      onClick={onClick}
    >
      {children}
    </button>
    :
    <button 
      className={classes.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TransparentButton;