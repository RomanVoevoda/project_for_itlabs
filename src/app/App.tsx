import { FC } from 'react';
import classes from './App.module.scss';
import { Footer, Header, Main } from '@/widgets';

const App: FC = () => {
  console.log('rendderapp')
  return (
    <div className={classes.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;