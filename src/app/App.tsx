import { FC, useState } from 'react';
import classes from './App.module.scss';
import { Footer, Header, Main } from '@/widgets';
import { userInfo, userList } from '@/shared/consts';
import { UsersContext } from '@/shared/lib';

const App: FC = () => {
  console.log('rendderapp')

  window.addEventListener('beforeunload', () => {
    localStorage.setItem('users', JSON.stringify(userList))
  })

  const [renderedUsers, setRenderedUsers] = useState<userInfo[]>(userList);

  const context = {
    renderedUsers,
    setRenderedUsers
  }

  return (
    <UsersContext.Provider value={context}>
      <div className={classes.app}>
        <Header/>
        <Main />
        <Footer />
      </div>
    </UsersContext.Provider>
  );
};

export default App;