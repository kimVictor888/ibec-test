import { Route, Switch } from 'react-router';
import GamesList from '../../pages/GamesList/GamesList';
import Game from '../../pages/Game/Game';

import './Main.scss';

const Main = () => {
  return (
    <main className='main'>
      <Switch>
        <Route path='/game/:id' component={Game} />
        <Route path='/' exact component={GamesList} />
        <Route path='/' />
      </Switch>
    </main>
  );
};

export default Main;
