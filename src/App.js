import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Aside />
      <Main />
    </div>
  );
};

export default App;
