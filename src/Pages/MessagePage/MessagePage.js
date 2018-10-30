import React from "react";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
// Custom Imports
import localStyles from "./MessagePage.css";
import __NavBar from "../../components/NavBar/NavBar";
import __MessageList from "../../components/MessageList/MessageList";
import SendIcon from "@material-ui/icons/SendOutlined";

class ProfilePage extends React.Component {
  state = {
    InputA: "",
    InputB: "",
    messages: [
      {
        senderId: "Person A",
        text: "Hi Mr.B"
      }
    ]
  };

  handleInputA = e => {
    this.setState({ InputA: e.target.value });
  };

  handleInputB = e => {
    this.setState({ InputB: e.target.value });
  };
  addA = () => {
    let newArr = this.state.messages.concat({
      senderId: "Person A",
      text: this.state.InputA
    });

    this.setState({ messages: newArr });
  };

  addB = () => {
    let newArr = this.state.messages.concat({
      senderId: "Person B",
      text: this.state.InputB
    });

    this.setState({ messages: newArr });
  };
  render() {
    return (
      <div >
        <__NavBar />
        <Typography variant="h2" style={{padding:50,textAlign:"center"}}>Chat 101</Typography>

        <Grid container justify="center" spacing={24}>
          <Grid
            item
            xs={12}
            md={9}
            className={classNames(localStyles.messagesContRoot)}
          >
            <__MessageList
              messages={this.state.messages}
              className={classNames(localStyles.messageList)}
            />
            <div className={classNames(localStyles.inputContRoot)}>
              <div className={classNames(localStyles.inputCont)}>
                <TextField
                  id="input-person-A"
                  placeholder="Message - Person A"
                  onInput={event => this.handleInputA(event)}
                  margin="dense"
                />
                <Button
                  color="primary"
                  variant="raised"
                  className={classNames(localStyles.sendBtn)}
                  onClick={this.addA}
                >
                  <SendIcon />
                </Button>
              </div>
              <div className={classNames(localStyles.inputCont)}>
                <TextField
                  id="input-person-B"
                  placeholder="Message - Person B"
                  onInput={event => this.handleInputB(event)}
                  margin="dense"
                />
                <Button
                  color="primary"
                  variant="raised"
                  className={classNames(localStyles.sendBtn)}
                  onClick={this.addB}
                >
                  <SendIcon />
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ProfilePage;
