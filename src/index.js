import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Switch, Route,
} from 'react-router-dom';
import { Home, Register, Login } from './routes';

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
