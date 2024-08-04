import { FC, useCallback, useEffect, useState } from 'react';
import classes from './Header.module.scss';
import { Button, Input, Modal } from '@/shared/ui';
import { CreateUserForm } from '@/features';
import { useUsersContext } from '@/shared/lib';
import { filterArray } from '@/shared/lib/helpers/filterArray';
import { userList } from '@/shared/consts';
import { useSearchUsers } from '@/features/SearchUsers/lib/hooks/useSearchUsers';

const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [onlineCount, setOnlineCount] = useState(0);
  const [offlineCount, setOfflineCount] = useState(0);
  const {renderedUsers, setRenderedUsers} = useUsersContext();
  const searchUsers = useSearchUsers(setRenderedUsers, userList, 'name');

  useEffect(() => {
    let online = filterArray(userList, 'online', true);
    let offline = filterArray(userList, 'online', false);

    setOnlineCount(online.length);
    setOfflineCount(offline.length);
  }, [renderedUsers]);

  const inputHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    searchUsers(e.target.value);
  }, [searchUsers]);

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
          onChange={inputHandler}
        />
      </div>

      <Button 
        type='primary' 
        color='green'
        onClick={() => setIsModalOpen(true)}
      >
        Добавить
      </Button>

      <div className={classes.header__container}>
        <p className={classes.header__text}>
          Посетители
        </p>
        <div className={classes.header__text_container}>
          <p className={classes.header__text_green}>
            {onlineCount}
          </p>
          <p className={classes.header__text}>
            /
          </p>
          <p className={classes.header__text_red}>
            {offlineCount}
          </p>
        </div>
      </div>

      {isModalOpen &&
        <Modal>
          <CreateUserForm
            closeForm={() => setIsModalOpen(false)}
            formId={'form__create_visitor'}
            formFieldsContainerId={'form__create_visitor_container'}
          />
        </Modal>
      }
    </header>
  );
};

export default Header;