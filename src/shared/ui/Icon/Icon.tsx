import { FC } from 'react';
import { IconsProps } from './types';
import XMark from './XMark/XMark';

const Icon: FC<IconsProps> = ({type, onClick}) => {
  switch(type) {
    case 'x-mark':
      return <XMark onClick={onClick}/>
    default:
      return null;
  }
}

export default Icon;