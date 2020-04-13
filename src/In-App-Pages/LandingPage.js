import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import Calendar from './Calendar';
import HomePage from './HomePage';
import Settings from './Settings';
import Library from './Library';
import settings_icon from '../assets/settings-icon.png';
import '../scss/main.scss';
import AddTask from './AddTask';
import TextMe from './TextMe';





class LandingPage extends Component {
    constructor(props){
        super(props);

    }

    render() {
        
        return (
            <Router>
                <h1 className = 'header'>Welcome to OSAT!</h1>
                <div>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>

                        <Route exact path="/calendar" component={Calendar}/>
                        <Route exact path = "/myCalendar/:dateString" component = {AddTask}/>
                        <Route exact path="/addtask" component={AddTask}/>
                        <Route exact path="/textme" component={TextMe}/>
                        <Route exact path="/library" component={Library}/>
                        <Route exact path="/settings" component={Settings}/>
                        
                    </Switch>
                </div>

                <h2 className="myNavbar">
                    <ButtonToolbar className = 'homepage-btn-toolbar'>
                        <LinkContainer to="/">
                            <Button variant="secondary">HomePage</Button>
                        </LinkContainer>
                        <LinkContainer to="/calendar">
                            <Button variant="outline-success">Calendar</Button>
                        </LinkContainer>
                        <LinkContainer to="/textme">
                            <Button>Text Me</Button>
                        </LinkContainer>
                        <LinkContainer to="/library">
                            <Button>Library</Button>
                        </LinkContainer>
                        <LinkContainer to="/settings">
                            <img src = {settings_icon} width='30' height='30'/>
                        </LinkContainer>
                    </ButtonToolbar>
                </h2>
            </Router>

            
         );
    }
}

export default LandingPage;




