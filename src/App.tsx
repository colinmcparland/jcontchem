import React, { FC } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { createBrowserHistory } from "history";
import { Header } from "./common/header/header";
import styled from "styled-components";
import { Footer } from "./common/footer/footer";
import { Contribute } from "./pages/contribute/contribute";

const PageContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 25px 15px;
  }

  @media screen and (min-width: 768px) and (max-width: 1080px) {
    padding: 25px;
  }

  @media screen and (min-width: 1080px) {
    padding: 50px;
  }
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
          <Route path="/contribute" exact component={Contribute} />
        </Switch>
      </PageContent>
      <Footer />
    </Router>
  </div>
);

export default App;
