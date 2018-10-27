import React from "react";
import Typography from "@material-ui/core/Typography";
// Custom Imports
import __NavBar from "../../components/NavBar/NavBar";
import __MessageList from "../../components/MessageList/MessageList";
import { Button } from "@material-ui/core";
class ProfilePage extends React.Component {
  state = {
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

  add = () => {
    const newArr = this.state.messages.concat({
      senderId: "Me",
      text: "Me myself"
    });

    this.setState({ messages: newArr });
  };
  render() {
    return (
      <div>
        <__NavBar />
        <Typography variant="h1">Messages</Typography>
        <__MessageList messages={this.state.messages} />
        <Button onClick={this.add}>+</Button>
      </div>
    );
  }
}

export default ProfilePage;
