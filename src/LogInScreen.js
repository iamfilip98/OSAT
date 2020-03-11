import React, {Component} from 'react';
import Logo from "./assets/OSAT.png";
import Validate from './Validate';



class LogInScreen extends Component {

    constructor(props) {
        super(props);
        
    }


  render() {
    return (
      <div className="login">
        <main>
            <img src={Logo} width="200" height="200" alt="osatlogo"/>
            
            
            <form className="LogInBox">
            <div className="LogInInfo">
                Log in using univeristy email ID
            </div>
                
            <div className="username">
                Username: 
                <input
                type="text"
                className="searchbar"
                placeholder=""
                />
            </div>
            <div className="password">
                Password: 
                <input
                type="text"
                className="searchbar"
                placeholder=""
                />
            </div>
            <div className="buttonbox">
            {/* <button className="LogInButton" onClick={this.props.handleClick}> */}
            <button className="LogInButton" onClick={this.Validate} onClick={this.props.handleClick}>
                Login >
            </button>
            </div>
            </form>
        </main>
      </div>
    );
  }
}

export default LogInScreen;
