import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Switch, Route,
} from 'react-router-dom';
import { LanguageProvider } from './context/language';
import { Home, Register, Login } from './routes';

const App = () => (
  <LanguageProvider>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </HashRouter>
  </LanguageProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
