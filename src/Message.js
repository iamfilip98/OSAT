import React, {Component} from 'react';

class Message extends React.Component {
  constructor(props) {
      super(props);
  }



  render() {
    return (
      <div className="login">
        <main>
            <div className="box">
                Do you prefer to study at night or during the day?
            </div>
            

            <button className="quizbutton" onClick={this.props.handleClick}>Night</button>
            <button className="quizbutton" >Day</button>
        </main>
      </div>
    );
  }
}

export default Message;
