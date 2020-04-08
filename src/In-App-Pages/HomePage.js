import React, { Component } from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router, Link, NavLink} from 'react-router-dom';
// import Route from 'react-router-dom/Route';
//___________________________________________________________________
import { MemoryRouter, Switch, Route } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import calendar from '../assets/calendar.jpeg';
import Home from './Home';
import '../scss/main.scss';


//const Home = () => <Home/>;


const Calendar = () => <img src = {calendar} height = '200' width = '300'/>;

const Settings = () => <span>Settings</span>;


class HomePage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
         

            <MemoryRouter>
                <h1 className = 'header'>Welcome to OSAT!</h1>
                <h2>
                    Current Page is{' '}
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route> 
                        <Route exact path="/calendar">
                            <Calendar />
                        </Route>
                        <Route exact path="/settings">
                            <Settings />
                        </Route>
                        <Route exact path="/library">
                            <span>Library</span>
                        </Route>  
                    </Switch>
                </h2>

                <h2 className="myNavbar">
                    <ButtonToolbar className = 'homepage-btn-toolbar'>
                        <LinkContainer to="/">
                            <Button variant="secondary">Home</Button>
                        </LinkContainer>
                        <LinkContainer to="/calendar">
                            <Button>Calendar</Button>
                        </LinkContainer>
                        <LinkContainer to="/library">
                            <Button>Library</Button>
                        </LinkContainer>
                        <LinkContainer to="/settings">
                            <Button>Settings</Button>
                        </LinkContainer>
                    </ButtonToolbar>
                </h2>
                </MemoryRouter>




            // <MemoryRouter>
            //     <Container className="p-4">
            //         <Jumbotron>
            //             <h1 className = 'header'>Welcome To React-Bootstrap</h1>
            //             <h2>
            //                 Current Page is{' '}
            //                 <Switch>
            //                     <Route path="/calendar">
            //                         <Calendar />
            //                     </Route>
            //                     <Route path="/settings">
            //                         <Settings />
            //                     </Route>
            //                     <Route path="/">
            //                         <Home />
            //                     </Route>
            //                 </Switch>
            //             </h2>

            //             <h2>
            //                 Navigate to{' '}
            //                 <ButtonToolbar className="custom-btn-toolbar">
            //                     <LinkContainer to="/">
            //                         <Button>Home</Button>
            //                     </LinkContainer>
            //                     <LinkContainer to="/calendar">
            //                         <Button>Calendar</Button>
            //                     </LinkContainer>
            //                     <LinkContainer to="/settings">
            //                         <Button>Settings</Button>
            //                     </LinkContainer>
            //                 </ButtonToolbar>
            //             </h2>
            //         </Jumbotron>
            //     </Container>
            // </MemoryRouter>
            
           
           
            
         );
    }
}

export default HomePage;




