import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        This is home page!
      </Route>
      <Route exact path='/starred'>
        This is starred!
      </Route>
      <Route>
        <h1>Error 404!</h1>
        <h2>Page not Found!</h2>
      </Route>
    </Switch>
  );
}

export default App;
