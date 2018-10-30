import React, { Component } from "react";
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";

import classNames from "classnames";

// Custom Imports
import "./App.css";
import __ProfilePage from "./Pages/ProfilePage/ProfilePage";
import __PostPage from "./Pages/PostPage/PostPage";
import __MessagePage from "./Pages/MessagePage/MessagePage";

const ProfilePage = () => (
  <div>
    <__ProfilePage />
  </div>
);

const PostPage = () => (
  <div>
    <__PostPage />
  </div>
);
const MessagePage = () => (
  <div>
    <__MessagePage />
  </div>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route
            exact
            path={'/'}
            render={() => <ProfilePage />}
          />
          <Route
            path={'/post'}
            render={() => <PostPage />}
          />

          <Route
            path={'/message'}
            render={() => <MessagePage />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
