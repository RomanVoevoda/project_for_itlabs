import { FC } from 'react';
import classes from './App.module.scss';
import { Footer, Header } from '@/widgets';

const App: FC = () => {
  return (
    <div className={classes.app}>
      <Header />
      <Footer />
    </div>
  );
};

export default App;