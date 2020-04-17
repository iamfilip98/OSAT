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
import OSAT_sublogo from '../assets/OSAT_sublogo.png';
import statusBar from '../assets/statusBar.png';



class LandingPage extends Component {
    constructor(props){
        super(props);

    }

    render() {
        
        return (
            <Router>
                <div className = "OSAT_HP_LOGO">
                    <img src={statusBar} height="22px" width="407px" className='statusBar' />
                    <br></br>
                    <img src={OSAT_sublogo} height="30px" width="120px"/>
                    <br></br>
                </div>
                <br></br>
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
                            <Button>HomePage</Button>
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




