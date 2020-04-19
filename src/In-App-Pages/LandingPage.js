import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import Calendar from './Calendar';
import HomePage from './HomePage';
import Library from './Library';
import settings from '../assets/settings.png';
import date from '../assets/date.png';
import home from '../assets/home.png';
import messages from '../assets/messages.png';
import books from '../assets/books.png';
import '../scss/main.scss';
import AddTask from './AddTask';
import TextMe from './TextMe';
import Toast from 'react-bootstrap/Toast';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import OSAT_sublogo from '../assets/OSAT_sublogo.png';
import statusBar from '../assets/statusBar.png';
import { format } from 'date-fns';



class LandingPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            time: new Date()
        }
    }

    render() {
        //this.setState({ time : new Date()});
        var timeFormat = 'p';
        var currentTime = format(this.state.time, timeFormat);
        
        return (
            <Router>

                

                <div className = "OSAT_HP_LOGO">
                    <img src={statusBar} height="22px" width="407px" className='statusBar' />
                    <div className='currentTime'>{currentTime}</div>
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
                        
                    </Switch>
                </div>
                
                

                

                <h2 className="myNavbar">
                    <ButtonToolbar className = 'homepage-btn-toolbar'>
                        <LinkContainer to="/">
                            <Button className='navbarButton' variant="info"><img src = {home} width='30' height='30'/></Button>
                        </LinkContainer>
          
                        <LinkContainer to="/calendar">
                            <Button className='navbarButton' variant="info"><img src = {date} width='30' height='30'/></Button>
                        </LinkContainer>
                       
                        <LinkContainer to="/textme">
                            <Button className='navbarButton' variant="info"><img src = {messages} width='30' height='30'/></Button>
                        </LinkContainer>
          
                        <LinkContainer to="/library">
                            <Button className='navbarButton' variant="info"><img src = {books} width='30' height='30'/></Button>
                        </LinkContainer>


                    </ButtonToolbar>
                </h2>
            </Router>

            
         );
    }
}

export default LandingPage;




