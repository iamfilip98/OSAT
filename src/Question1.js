import React, {Component} from 'react';

class Question1 extends React.Component {
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
            <button className="quizbutton" onClick={this.props.handleClick}>Day</button>
        </main>
      </div>
    );
  }
}

export default Question1;
