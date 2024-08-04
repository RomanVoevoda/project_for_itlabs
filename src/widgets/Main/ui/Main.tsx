import { FC, Fragment, useState } from 'react';
import classes from './Main.module.scss';
import { mainTableHeaders } from '../consts/mainTableHeaders';
import { userList } from '@/shared/consts';
import { defaultUserList } from '../consts/defaultUserList';
import { StatusSpan } from '@/shared/ui';

const Main: FC = () => {
  const [users, setUsers] = useState(userList.length > 0 ? userList : defaultUserList);

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

      {users.map((user, index) =>
        <Fragment key={index}>
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
        </Fragment>
      )}
    </main>
  );
};

export default Main;