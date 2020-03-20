import React, {Component} from 'react';

class MainScreen extends React.Component {
  constructor(props) {
      super(props);
  }

  state={
      username : this.props.username
  }

  render() {
    return (
      <div className="login">
        <main>
            <div className="box">
                Hello, <b>{this.state.username}</b>
                <br></br>
                Welcome to <b>OSAT!</b>
                <br></br>
                Together we can accomplish your goals, 
                <br></br>
                <b>one step at a time</b>
                <br></br>
            
            

                <button className="Button" onClick={this.props.handleClick}>Let Get Started!</button>
            </div>
        </main>
      </div>
    );
  }
}

export default MainScreen;
