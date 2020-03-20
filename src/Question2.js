import React, {Component} from 'react';

class Question2 extends React.Component {
  constructor(props) {
      super(props);
  }



  render() {
    return (
      <div className="login">
        <main>
            <div className="box">
                Do you like to be reminded often or are you self-motivated?
            </div>
            

            <button className="quizbutton" onClick={this.props.handleClick}>Remind me</button>
            <button className="quizbutton" onClick={this.props.handleClick}>I've got this</button>
        </main>
      </div>
    );
  }
}

export default Question2;
