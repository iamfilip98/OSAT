import React from 'react';

class Message extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="login">
        <main>
            <div className="box">
                Message!
            </div>
        </main>
      </div>
    );
  }
}

export default Message;
