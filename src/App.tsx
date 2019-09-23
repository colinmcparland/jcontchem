import React, { FC } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { createBrowserHistory } from "history";
import { Header } from "./common/header/header";

const App: FC = () => (
  <div>
    <Router history={createBrowserHistory()}>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </Router>
  </div>
);

export default App;
