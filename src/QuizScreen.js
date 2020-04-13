import React, {Component} from 'react';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Owl from './assets/barn-owl-night.webp';
import './scss/main.scss';

class QuizScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state={
          question1: true,
          question2: false,
          question3: false,
          result: false,
          personalitytype: ""
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
  }
  
  owl = (e) =>{
    e.preventDefault();
    this.setState({ personalitytype: this.state.personalitytype + " Owl" });
  }



  consoleIt = () => {
    console.log("button clicked");
  }

  render() {
    
    return (
      <div className="login">
        <main>
            <div className="box">
                <b>QUIZ</b>
            
            {this.state.question1 ? <Question1 handleClick={this.q2} handleNight={this.night} handleDay={this.day}/> : null }
            {this.state.question2 ? <Question2 handleClick={this.q3} handleBee={this.bee} handleOwl={this.owl}/> : null }
            {this.state.question3 ? <Question3 handleClick={this.showresult}/> : null }

            {this.state.result ? 
              <div>
                
                You are a <b>{this.state.personalitytype}</b>
                
                <button onClick = {this.props.goToLandingPage}>Continue</button>
              </div> 
            : null }
            
            </div>
            
        </main>
      </div>
    );
  }
}

export default QuizScreen;
