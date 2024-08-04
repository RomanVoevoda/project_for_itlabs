import { FC, useState } from 'react';
import classes from './Footer.module.scss';
import { Button } from '@/shared/ui';
import { buttonsArray } from '../consts/buttonsArray';
import { useFilter } from '@/shared/lib';
import { setFilter } from '../lib/helpers/setFilter';

const Footer: FC = () => {
  let currenActiveButton = localStorage.getItem('filter');
  const [activeButton, setActiveButton] = useState(currenActiveButton != null ? currenActiveButton : buttonsArray.at(-1));

  const filterArgs = setFilter(activeButton || 'Без фильтра', buttonsArray);
  useFilter(...filterArgs);

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
    localStorage.setItem('filter', button);
  };

  return (
    <footer className={classes.footer}>
      <p className={classes.footer__text}>
        Фильтровать по:
      </p>

      {buttonsArray.map(button => 
        <Button 
          key={button}
          type='transparent' 
          onClick={() => {
            handleButtonClick(button);
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