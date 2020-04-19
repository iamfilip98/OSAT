import React from 'react';
import './scss/main.scss';

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
            

            <button className="Button" onClick={(e) => {this.props.handleClick(e); this.props.handleBee(e)}}>Remind me</button>
            <button className="Button" onClick={(e) => {this.props.handleClick(e); this.props.handleOwl(e)}}>I've got this</button>
        </main>
      </div>
    );
  }
}

export default Question2;
