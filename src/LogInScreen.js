import React, {Component} from 'react';
import Logo from "./assets/OSAT.png";
import './scss/main.scss';
import './login.css'
import Button from 'react-bootstrap/Button';

class LogInScreen extends Component {


  constructor(props) {
    super(props);
    this.state={
      correctUser: {
        "John":"1234",
        "Tim":"pass",
        "Lennard":"bow",
      },
      
      errorhappened: false
      
    }

    this.verify = this.verify.bind(this)
    
  }

  verify(e) {
    e.preventDefault();
    //####################################//
    //DO YOU NEED THE BELOW CODE?
    // this.setState({
    //   errorhappened:false
    // })
    //#######################################
    
    
    
    if (this.state.correctUser[this.props.username] && this.state.correctUser[this.props.username] === this.props.password) {
      this.props.handleClick();
    }
    
    this.setState({
      errorhappened:true
    })
    
  }


  render() {
    
    return (
      <div className="login">
        
            <img src={Logo} width="200" height="200" alt="osatlogo"/>
            
            <form className="LogInBox" onSubmit={this.verify}>
            
              <div className="LogInInfo">
                  Log in with username or university email
              </div>


              {
                this.state.errorhappened?<div  className="error">
              Try again
              </div>:null
              }
  
              <div className="username">
                  Username: 
                  <input
                  type="text"
                  className="searchbar"
                  placeholder="username"
                  value={this.props.username}
                  onChange={this.props.handleUsername}
                  style={{"color" :"orange;"}}
                  />
              </div>
              <div className="password">
                  Password: 
                  <input
                  type="password"
                  className="searchbar"
                  placeholder="password"
                  value={this.props.password}
                  onChange={this.props.handlePassword}
                  />
              </div>
              <div className="buttonbox">
                <button className="Button">
                    Login >
                </button>
              </div>
            </form>
            
          
        
      </div>
    );
  }
}

export default LogInScreen;
