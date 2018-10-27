import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
    <__MessagePage />{" "}
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <ProfilePage />} />
          <Route path="/post" render={() => <PostPage />} />

          <Route path="/message" render={() => <MessagePage />} />
        </div>
      </Router>
    );
  }
}

export default App;
