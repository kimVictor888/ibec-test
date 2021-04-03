import { Route, Switch } from 'react-router';
import Gallery from '../../pages/Gallery/Gallery';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path='/game/:id' />
        <Route path='/' exact component={Gallery} />
        <Route path='/' />
      </Switch>
    </main>
  );
};

export default Main;
