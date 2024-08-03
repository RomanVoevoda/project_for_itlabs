import { FC } from 'react';
import { ButtonProps } from '../types';
import classes from './PrimaryButton.module.scss';

const PrimaryButton: FC<Omit<ButtonProps, 'type'>> = ({children, color, onClick, submit}) => {
  return (
    submit
    ?
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
    type='submit'
    onSubmit={onClick}
    >
      {children}
    </button>
    :
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