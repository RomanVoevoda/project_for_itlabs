import { FC, Fragment, useEffect, useState } from 'react';
import classes from './Main.module.scss';
import { mainTableHeaders } from '../consts/mainTableHeaders';
import { StatusSpan } from '@/shared/ui';
import { userInfo, userList } from '@/shared/consts';
import { useCountContext } from '@/shared/lib';

const Main: FC = () => {
  const {count} = useCountContext();
  
  const [users, setUsers] = useState<userInfo[]>(userList);

  useEffect(() => {
    console.log('список отрендерился');
    setUsers(userList);
  }, [count])

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