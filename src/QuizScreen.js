import React, {Component} from 'react';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Owl from './assets/owl.png';
import Bee from './assets/bee.png';
import './scss/main.scss';
import OSAT_sublogo from './assets/OSAT_sublogo.png';
import statusBar from './assets/statusBar.png';
import { format } from 'date-fns';
import date from './assets/date.png';
import home from './assets/home.png';
import { Router } from 'react-router-dom';

class QuizScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state={
          question1: true,
          question2: false,
          question3: false,
          result: false,
          personalitytype: "",
          beeimage: false,
          owlimage: false,
          time: new Date()
      }
  }

  state={
      username : this.props.username
  }

  q2 = (e) =>{
    e.preventDefault();
    this.setState({ question1: false });
    this.setState({ question2: true });
  }

  q3 = (e) =>{
    e.preventDefault();
    this.setState({ question2: false });
    this.setState({ question3: true });
  }

  showresult = (e) =>{
    e.preventDefault();
    this.setState({ question3: false });
    this.setState({ result: true });
  }


  night = (e) =>{
    e.preventDefault();
    this.setState({ personalitytype: "Night" });
  }

  day = (e) =>{
    e.preventDefault();
    this.setState({ personalitytype: "Busy" });
  }

  bee = (e) =>{
    e.preventDefault();
    this.setState({ personalitytype: this.state.personalitytype + " Bee" });
    this.setState({ beeimage: true });
  }
  
  owl = (e) =>{
    e.preventDefault();
    this.setState({ personalitytype: this.state.personalitytype + " Owl" });
    this.setState({ owlimage: true });
  }



  consoleIt = () => {
    console.log("button clicked");
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
                <b>QUIZ</b>
            
            {this.state.question1 ? <Question1 handleClick={this.q2} handleNight={this.night} handleDay={this.day}/> : null }
            {this.state.question2 ? <Question2 handleClick={this.q3} handleBee={this.bee} handleOwl={this.owl}/> : null }
            {this.state.question3 ? <Question3 handleClick={this.showresult}/> : null }

            {this.state.result ? 
              <div>
                <div>
                You are a <b>{this.state.personalitytype}</b>
                
                <br></br>
                
                </div>
                {this.state.beeimage ? <img src={Bee} height="40px" width="40px" /> : null}
                {this.state.owlimage ? <img src={Owl} height="40px" width="40px" /> : null}
                <br></br>
                <br></br>
  
                <button className='Button' onClick = {this.props.goToLandingPage}>Continue</button>
              </div> 
            : null }
            
            </div>
            
        </main>
        </div>

      </div>
      
    );
  }
}

export default QuizScreen;
