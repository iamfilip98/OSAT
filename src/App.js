import React, {Component} from 'react';
import LogInScreen from './LogInScreen';
import MainScreen from './MainScreen';
import QuizScreen from './QuizScreen';
import Message from './Message';
import HomePage from './In-App-Pages/HomePage';



class App extends Component {

  constructor(props){
    super(props);

    this.state={ 
      loginscreen: true, 
      mainscreen: false, 
      welcomescreen: false,
      quizscreen: false,
      homePage: false,
      username : "",
      password : ""
      
    };
    // this.changeScreen=this.changeScreen.bind(this);
    this.changeScreenQuiz=this.changeScreenQuiz.bind(this);
    

  }

  changeScreen = (e) =>{
    
    this.setState({ loginscreen: false });
    this.setState({ mainscreen: true });
   
  }

  changeScreenQuiz = (e) =>{
    
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
    
    this.setState({ isLoggedIn: true });

  }

  goToHomePage = (e) =>{
    this.setState({ quizscreen : false})
    this.setState({ homePage : true})
  }

  render() {
    return (
      <div className="app">
        <main>
          <div> 
                      
            {this.state.loginscreen ? <LogInScreen handleUsername={this.handleUsername} handlePassword={this.handlePassword} handleClick={this.changeScreen} username={this.state.username} password={this.state.password} /> : null }

            {this.state.mainscreen ? <MainScreen username={this.state.username} handleClick={this.changeScreenQuiz} /> : null }

            {this.state.quizscreen ? <QuizScreen username={this.state.username} goToHomePage = {this.goToHomePage}/> : null }

            {this.state.homePage ? <HomePage username={this.state.username}  />: null }

          </div>
          
        </main>
        
      </div>
    );
  }
}

export default App;
