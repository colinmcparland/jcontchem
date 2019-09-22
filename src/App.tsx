import React, { FC } from 'react';
import { Route, Router, Switch } from "react-router-dom";
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { createBrowserHistory } from "history";

const App: FC = () => <div><Router history={createBrowserHistory()}>
    <h2>Journal of Contrarian Chemistry</h2>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
    </Switch>
</Router></div>;

export default App;