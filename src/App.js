import { Route, Switch } from 'react-router';

const App = () => {
  return (
    <Switch>
      <Route path='/game/:id' />
      <Route path='/' exact />
      <Route path='/' />
    </Switch>
  );
};

export default App;
