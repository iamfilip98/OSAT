import React, {Component} from 'react';
import Logo from "./assets/OSAT.png";





class LogInScreen extends Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="login">
        <main>
            <img src={Logo} width="200" height="200" alt="osatlogo"/>
            
            
            <form className="LogInBox" onSubmit={this.props.handleClick}>
              <div className="LogInInfo">
                  Log in using university email ID
              </div>
                  
              <div className="username">
                  Username: 
                  <input
                  type="text"
                  className="searchbar"
                  placeholder=""
                  value={this.props.username}
                  onChange={this.props.handleUsername}
                  />
              </div>
              <div className="password">
                  Password: 
                  <input
                  type="password"
                  className="searchbar"
                  placeholder=""
                  value={this.props.password}
                  onChange={this.props.handlePassword}
                  />
              </div>
              <div className="buttonbox">
                <button  className="Button">
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
