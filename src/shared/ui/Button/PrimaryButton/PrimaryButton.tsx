import { FC } from 'react';
import { ButtonProps } from '../types';
import classes from './PrimaryButton.module.scss';

const PrimaryButton: FC<ButtonProps> = ({children, color, onClick}) => {
  return (
    <button className={
      color === 'gray'
      ?
      classes.button
      +
      ' '
      +
      classes.button_gray
      :
      classes.button
      +
      ' '
      +
      classes.button_green
    }
    onClick={onClick}
    >
      {children}
    </button>
  )
}

export default PrimaryButton