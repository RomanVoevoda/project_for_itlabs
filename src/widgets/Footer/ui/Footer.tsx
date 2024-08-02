import { FC, useState } from 'react';
import classes from './Footer.module.scss';
import { Button } from '@/shared/ui';
import { buttonsArray } from '../consts/buttonsArray';

const Footer: FC = () => {
  let currenActiveButton = localStorage.getItem('filter');
  const [activeButton, setActiveButton] = useState(currenActiveButton != null ? currenActiveButton : buttonsArray.at(-1));

  return (
    <footer className={classes.footer}>
      <p className={classes.footer__text}>
        Фильтровать по:
      </p>

      {buttonsArray.map(button => 
        <Button 
          type='transparent' 
          onClick={() => {
            setActiveButton(button);
            localStorage.setItem('filter', button);
          }}
          active={button === activeButton ? true : false}
        >
          {button}
        </Button>
      )}
    </footer>
  );
};

export default Footer;