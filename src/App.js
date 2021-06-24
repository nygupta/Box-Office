import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/starred'>
          <Starred />
        </Route>
        <Route>
          <h1>Error 404!</h1>
          <h2>Page not Found!</h2>
        </Route>
      </Switch>
  );
}

export default App;
