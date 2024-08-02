import { FC } from 'react';
import { ButtonProps } from '../types';
import classes from './PrimaryButton.module.scss';

const PrimaryButton: FC<ButtonProps> = ({children, color}) => {
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
    }>
      {children}
    </button>
  )
}

export default PrimaryButton