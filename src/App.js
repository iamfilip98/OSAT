import React, {Component} from 'react';
import LogInScreen from './LogInScreen';
import WelcomeScreen from './WelcomeScreen';
import QuizScreen from './QuizScreen';
import Message from './Message';
import LandingPage from './In-App-Pages/LandingPage';
import './scss/main.scss';





class App extends Component {

  constructor(props){
    super(props);

    this.state={ 
      loginscreen: true, 
      welcomescreen: false,
      quizscreen: false,
      landingpage: false,
      username : "",
      password : ""
      
    };
    // this.changeScreen=this.changeScreen.bind(this);
    this.changeScreenQuiz=this.changeScreenQuiz.bind(this);
    

  }

  changeScreen = (e) =>{

    

    if (this.state.username == "John"){
      this.goToLandingPage();

    }
    
    this.setState({ loginscreen: false });
    this.setState({ welcomescreen: true });
   
  }

  changeScreenQuiz = (e) =>{
    
    this.setState({ welcomescreen: false });
    this.setState({ quizscreen: true });
   
  }

  handleUsername = (e) => {
    this.setState(
      {username: e.target.value}
    );
  }

  handlePassword = (e) => {
    this.setState(
      {password: e.target.value}
    );
  }



  goToLandingPage = (e) =>{
     //console.log("reached App.js function");
     this.setState({ quizscreen : false});
     this.setState({ landingpage : true});
   
  }

  councellorview = (e) =>{
    
    
    return <LandingPage username={this.state.username}></LandingPage>
    
  
 }




  

  render() {
    return (
      <div className="app">


        
             
        {this.state.loginscreen ? <LogInScreen handleUsername={this.handleUsername} handlePassword={this.handlePassword} handleClick={this.changeScreen} username={this.state.username} password={this.state.password} /> : null }



        {this.state.username == "Tim"? <>
          {this.state.welcomescreen ? <WelcomeScreen username={this.state.username} handleClick={this.changeScreenQuiz} /> : null }

          {this.state.quizscreen ? <QuizScreen username={this.state.username} goToLandingPage = {this.goToLandingPage}/> : null }

          {this.state.landingpage ? <LandingPage username={this.state.username}  />: null } </>:  this.state.landingpage ? <LandingPage username={this.state.username}  />: null  }
        


      </div>
    );
  }
}

export default App;
