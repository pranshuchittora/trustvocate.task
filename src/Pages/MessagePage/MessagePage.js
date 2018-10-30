import React from "react";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
// Custom Imports
import __NavBar from "../../components/NavBar/NavBar";
import __MessageList from "../../components/MessageList/MessageList";

class ProfilePage extends React.Component {
  state = {
    InputA: "",
    messages: [
      {
        senderId: "Person A",
        text: "Me myself"
      },
      {
        senderId: "Person A",
        text: "XYZ?"
      }
    ]
  };

  handleInputA = e => {
    this.setState({ InputA: e.target.value });
  };
  add = message => {
    let newArr = this.state.messages.concat({
      senderId: "Person A",
      text: this.state.InputA
    });

    this.setState({messages:newArr})
  };
  render() {
    return (
      <div>
        <__NavBar />
        <Typography variant="h1">Messages</Typography>
        <__MessageList messages={this.state.messages}  />
        <TextField
          id="standard-dense"
          placeholder="Message - Person A"
          onInput={event => this.handleInputA(event)}
          margin="dense"
        />
        <Button onClick={this.add}>+</Button>
      </div>
    );
  }
}

export default ProfilePage;
