import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Switch, Route,
} from 'react-router-dom';
import { LanguageProvider } from './context/language';
import { Home, AddDemand, FeedbackDemand, Search } from './routes';
import Header from './components/header';

const App = () => (
  <LanguageProvider>
    <Header />
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/demand/add" component={AddDemand} />
        <Route exact path="/demand/feedback" component={FeedbackDemand} />
        <Route exact path="/demand/search" component={Search} />
      </Switch>
    </HashRouter>
  </LanguageProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
