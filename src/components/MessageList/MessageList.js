import React from "react";

class MessageList extends React.Component {
  render() {
    return (
 <div>
        {this.props.messages.map(message => {
          return (
              <div style={{padding:10,background:"#ccc",margin:20}}>
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

export default MessageList