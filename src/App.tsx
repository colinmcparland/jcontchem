import React from 'react';
import { Route, Router } from "react-router-dom";
import { Home } from './pages/home/home';
import { About } from './pages/about/about';

const App = () => <Router>
    <Route path="/" exact component={<Home />} />
    <Route path="/about" exact component={<About />} />
</Router>;

export default App;
