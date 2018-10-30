import React from "react";
import classNames from "classnames";
import localStyles from "./MessageList.css";
class MessageList extends React.Component {
  render() {
    return (
      <div>
        {this.props.messages.map(message => {
          return (
            <div
              className={classNames(
                message.senderId == "Person B"
                  ? localStyles.right
                  : localStyles.left,
                localStyles.message
              )}
              style={{ padding: 10, margin: 20 }}
            >
              <div key={message.id}>
                <div>{message.senderId}</div>
                <div>{message.text}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MessageList;
