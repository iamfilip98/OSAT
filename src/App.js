import React, {Component} from 'react';
import LogInScreen from './LogInScreen';
import MainScreen from './MainScreen';
import QuizScreen from './QuizScreen';
import Message from './Message';




class App extends Component {

  constructor(props){
    super(props);
    this.state={ 
      loginscreen: true, 
      mainscreen: false, 
      welcomescreen: false,
      quizscreen: false,
      username : "",
      password : ""
      
    
    };
    this.changeScreen=this.changeScreen.bind(this);
    this.changeScreenQuiz=this.changeScreenQuiz.bind(this);
    

  }

  changeScreen = (e) =>{
    e.preventDefault();
    this.setState({ loginscreen: false });
    this.setState({ mainscreen: true });
   
  }

  changeScreenQuiz = (e) =>{
    e.preventDefault();
    this.setState({ mainscreen: false });
    this.setState({ quizscreen: true });
   
  }

  handleUsername = (e) => {
    this.setState(
      {username: e.target.value}
    )
  }

  handlePassword = (e) => {
    this.setState(
      {password: e.target.value}
    )
  }

  handleLogIn = (e) =>{
    e.preventDefault();
    this.setState({ isLoggedIn: true });

  }

  render() {
    
    return (
      <div className="app">
        <main>
          <div> 
                      
            {this.state.loginscreen ? <LogInScreen handleUsername={this.handleUsername} handlePassword={this.handlePassword} handleClick={this.changeScreen} username={this.state.username} password={this.state.password} /> : null }

            {this.state.mainscreen ? <MainScreen username={this.state.username} handleClick={this.changeScreenQuiz} /> : null }

            {this.state.quizscreen ? <QuizScreen username={this.state.username}/> : null }

          </div>
          
        </main>
        
      </div>
    );
  }
}

export default App;
