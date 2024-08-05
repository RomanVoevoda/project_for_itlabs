import { FC, Fragment, useEffect, useState } from 'react';
import classes from './Main.module.scss';
import { mainTableHeaders } from '../consts/mainTableHeaders';
import { Modal, StatusSpan } from '@/shared/ui';
import { useUsersContext } from '@/shared/lib';
import { CreateUserForm } from '@/features';
import { deleteOldUser, FormValuesTuple, renderNewUser } from '@/features/CreateUserForm';

const Main: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(0);
  const [formValues, setFormValues] = useState<FormValuesTuple>(['', '', 'Выбрать', false]);

  const {renderedUsers, setRenderedUsers} = useUsersContext();

  useEffect(() => {
    console.log('список отрендерился');
    setRenderedUsers(renderedUsers);
  }, [renderedUsers])

  return (
    <main className={classes.main}>
      {mainTableHeaders.map((header, index) =>
        <div 
          className={
            index + 1 === mainTableHeaders.length
            ?
            classes.main__header_text_last
            :
            classes.main__header_text     
          }
          key={header}
        >
          {header}
        </div>
      )}

      {renderedUsers.map((user, index) =>
        <div key={user.id} 
          className={classes.main__content_block}
          onClick={() => {
            setCurrentUserId(user.id);
            setFormValues([user.name, user.company, user.group, user.online]);
            setIsModalOpen(true);
          }}
        >
          <p className={classes.main__cell_text}>
            {index + 1}
          </p> 
          <p className={classes.main__cell_text}>
            {user.name}
          </p>
          <p className={classes.main__cell_text}>
            {user.company}
          </p>
          <p className={classes.main__cell_text}>
            {user.group}
          </p>
          <p className={classes.main__cell_text_last}>
            {user.online
              ?
              <StatusSpan type='green'/>
              :
              <StatusSpan type='red'/>
            }
          </p>
        </div>
      )}

      {isModalOpen &&
        <Modal>
          <CreateUserForm 
            closeForm={() => setIsModalOpen(false)}
            submitForm={(e) => {
              deleteOldUser(currentUserId, renderedUsers, setRenderedUsers);
              renderNewUser(e, renderedUsers, setRenderedUsers, currentUserId);
            }}
            values={formValues}
          />
        </Modal>
      }
    </main>
  );
};

export default Main;