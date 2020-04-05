import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Switch, Route,
} from 'react-router-dom';
import { LanguageProvider } from './context/language';
import { AddDemand, FeedbackDemand, Search } from './routes';


const App = () => (
  <LanguageProvider>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/demand/add" component={AddDemand} />
        <Route exact path="/demand/feedback" component={FeedbackDemand} />
        <Route exact path="/demand/search" component={Search} />
      </Switch>
    </HashRouter>
  </LanguageProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
