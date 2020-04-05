import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";

import { Home, Register, Login, Search } from "./routes";
import Drawer from "./components/drawer";

const App = () => (
  <HashRouter>
    <Drawer>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/search" component={Search} />
      </Switch>
    </Drawer>
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
