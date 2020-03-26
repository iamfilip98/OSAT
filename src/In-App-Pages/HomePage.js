import React, { Component } from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router, Link, NavLink} from 'react-router-dom';
// import Route from 'react-router-dom/Route';
//___________________________________________________________________
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import './HomePage.css';

const Home = () => <span>Home</span>;

const Calendar = () => <span>Calendar</span>;

const Settings = () => <span>Settings</span>;


class HomePage extends Component {
    constructor(props){
        super(props);

    //     this.state={ 
    //         homepage: true,
    //         calendar: false,
    //         library: false,
    //         settings: false
    //   }
    // test
    }

    // const Home = () => {<span>Home</span>};
    // function Home() {
    //     return (<span>Home</span>);
    //   }

    // const Calendar = () => {<span>Calendar</span>};

    // const Settings = () => {<span>Settings</span>};


    render() {
        return (
            <MemoryRouter>
                <Container className="p-4">
                    <Jumbotron>
                        <h1 className = 'header'>Welcome To React-Bootstrap</h1>
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

                        <h2>
                            Navigate to{' '}
                            <ButtonToolbar className="custom-btn-toolbar">
                                <LinkContainer to="/">
                                    <Button>Home</Button>
                                </LinkContainer>
                                <LinkContainer to="/calendar">
                                    <Button>Calendar</Button>
                                </LinkContainer>
                                <LinkContainer to="/settings">
                                    <Button>Settings</Button>
                                </LinkContainer>
                                <LinkContainer to="/library">
                                    <Button>Library</Button>
                                </LinkContainer>
                            </ButtonToolbar>
                        </h2>
                    </Jumbotron>
                </Container>
            </MemoryRouter>
//             // <Router>
//             //     <div>


                     
//             //         <Route exact path='/' render ={
//             //                 () => {
//             //                     return (<h1>HomePage!</h1>);
//             //                 }
//             //             }/>
//             //         <div style = {homePageButton}>    
//             //             <NavLink exact to='/' activeStyle ={
//             //                  {color: 'green'}}>Home</NavLink> 
//             //         </div> 

                    
//             //         <Route exact path='/calendar' render={
//             //                 () => {
//             //                     return (<Calendar/>);
//             //                 }
//             //             }/> 
//             //         <div style = {calendarButton}>
//             //             <NavLink exact to='/calendar' activeStyle ={
//             //                 {color: 'green'}}>Calendar</NavLink>
//             //         </div>
               
//             //     </div>
//             // </Router>
           

            
         );
    }
}


           
// const homePageButton= {
//     position: 'absolute',
//     top: '600px',
//     left: '500px',

// }

// const calendarButton = {
//     position: 'absolute',
//     top: '600px',
//     left: '125px',
// }

export default HomePage;