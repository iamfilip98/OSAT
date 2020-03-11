import React, {Component} from 'react';
import LogInScreen from './LogInScreen';
import Validate from './Validate';




class App extends Component {

  constructor(props){
    super(props);
    this.state={ loginscreen: true, mainscreen: false };
    this.changeScreen=this.changeScreen.bind(this);

  }

  changeScreen = (event) =>{
    this.setState({ loginscreen: false });
    this.setState({ mainscreen: true });
   
  }


  render() {
    return (
      <div className="app">
        <main>
          <div>            
            {this.state.loginscreen ? <LogInScreen handleClick={this.changeScreen}/> : null }
            
          </div>
          
        </main>
        
      </div>
    );
  }
}

export default App;
