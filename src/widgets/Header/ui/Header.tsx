import { FC, useState } from 'react';
import classes from './Header.module.scss';
import { Button, Input, Modal } from '@/shared/ui';

const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={classes.header}>
      <img 
        src='assets/images/logo.webp' 
        alt='Агроном Сад'
        className={classes.header__image}
      />

      <div className={classes.header__input_container}>
        <Input 
          type='text' 
          placeholder='Поиск по имени' 
          size='normal'
        />
      </div>

      <Button 
        type='primary' 
        color='green'
        onClick={() => setIsModalOpen(true)}
      >
        Добавить
      </Button>

      <div className={classes.header__container}></div>

      {isModalOpen &&
        <Modal>
          Модалка открыта
        </Modal>
      }
    </header>
  );
};

export default Header;