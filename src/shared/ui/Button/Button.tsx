import { FC } from 'react';
import { ButtonProps } from './types';
import PrimaryButton from './PrimaryButton/PrimaryButton';
import TransparentButton from './TransparentButton/TransparentButton';

interface Props extends ButtonProps{
  type: "primary" | "transparent";
}

const Button: FC<Props> = ({type, onClick, children, color, active}) => {
  switch (type) {
    case "primary":
      return <PrimaryButton children={children} onClick={onClick} color={color}/>;
    case "transparent":
      return <TransparentButton children={children} onClick={onClick} active={active}/>;
    default:
      return null;
  }
}

export default Button;