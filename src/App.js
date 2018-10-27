import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import classNames from "classnames";
import "./App.css";

const ProfilePage = () => <h1>Profile</h1>;

const PostPage = () => <h1>Post</h1>;
const MessagePage = () => <h1>Message</h1>;

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
