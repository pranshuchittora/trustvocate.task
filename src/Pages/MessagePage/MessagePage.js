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
        senderId: "Me",
        text: "Me myself"
      },
      {
        senderId: "OtherSIde",
        text: "XYZ?"
      }
    ]
  };

  handleInputA = event => {
    this.setState({ InputA: event.target.valuve });
  };
  // add = (message) => {
  //   const newArr = this.state.messages.concat({
  //     senderId: "Person A",
  //     text: this.state.messages[this.state.messages.length -1 ].text
  //   });
  //   this.setState({messages:newArr})
  // };
  render() {
    return (
      <div>
        <__NavBar />
        <Typography variant="h1">Messages</Typography>
        <__MessageList messages={this.state.messages} />
        <TextField
          id="standard-dense"
          placeholder="Message - Person A"
          onChange={this.handleInputA}
          margin="dense"
        />
        <Button onClick={this.add}>+</Button>
      </div>
    );
  }
}

export default ProfilePage;
