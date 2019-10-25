import React, { FC } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { createBrowserHistory } from "history";
import { Header } from "./common/header/header";
import styled from "styled-components";

const PageContent = styled.div`
  padding: 50px;
  max-width: 1280px;
  margin: 0 auto;
`;

const App: FC = () => (
  <div>
    <Router history={createBrowserHistory()}>
      <Header
        pageTitle={
          window.location.pathname === "/"
            ? ""
            : window.location.pathname.replace("-", " ")
        }
      />
      <PageContent>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/document/:name" exact component={About} />
        </Switch>
      </PageContent>
    </Router>
  </div>
);

export default App;
