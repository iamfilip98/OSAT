import React from 'react';
import './scss/main.scss';
import OSAT_sublogo from './assets/OSAT_sublogo.png';
import statusBar from './assets/statusBar.png';
import { format } from 'date-fns';
import date from './assets/date.png';
import home from './assets/home.png';
import { Router } from 'react-router-dom';

class WelcomeScreen extends React.Component {
  constructor(props) {
      super(props);
  }

  state={
      username : this.props.username,
      time: new Date()
  }

  render() {
    var timeFormat = 'p';
    var currentTime = format(this.state.time, timeFormat);
    return (
      <div>
        <div className = "OSAT_HP_LOGO">
          <img src={statusBar} height="22px" width="407px" className='statusBar' />
          <div className='currentTime'>{currentTime}</div>
          <br></br>
          <img src={OSAT_sublogo} height="30px" width="120px"/>
          <br></br>
        </div>
        <br></br>
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

      </div>
      
    );
  }
}

export default WelcomeScreen;
