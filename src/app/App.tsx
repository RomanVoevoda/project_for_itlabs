import { FC, useState } from 'react';
import classes from './App.module.scss';
import { Footer, Header, Main } from '@/widgets';
import { userInfo, userList } from '@/shared/consts';
import { CountContext } from '@/shared/lib';

const App: FC = () => {
  console.log('rendderapp')

  window.addEventListener('beforeunload', () => {
    localStorage.setItem('users', JSON.stringify(userList))
  })

  const [count, setCount] = useState<number>(0);
  const [renderedUsers, setRenderedUsers] = useState<userInfo[]>(userList);

  const context = {
    count,
    setCount,
    renderedUsers,
    setRenderedUsers
  }

  return (
    <CountContext.Provider value={context}>
      <div className={classes.app}>
        <Header/>
        <Main />
        <Footer />
      </div>
    </CountContext.Provider>
  );
};

export default App;