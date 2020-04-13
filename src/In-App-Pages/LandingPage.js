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





class LandingPage extends Component {
    constructor(props){
        super(props);

        // this.state = {
        //     display: true
        // }
    }

    // changeDisplay(e){
    //     console.log(e.target.value);
    //     //this.setState(!this.state.display);
    // }

    goToAddTask(){
        
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

                        <Route exact path="/settings" component={Settings}/>
                        <Route exact path="/library" component={Library}/>
                        <Route exact path="/addtask" component={AddTask}/>
                    </Switch>
                </div>

                <h2 className="myNavbar">
                    <ButtonToolbar className = 'homepage-btn-toolbar'>
                        <LinkContainer to="/">
                            <Button variant="secondary">HomePage</Button>
                        </LinkContainer>
                        <LinkContainer to="/calendar">
                            <Button>Calendar</Button>
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


           

            // <Router>
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
            // </Router>
            
           
           
            
         );
    }
}

export default LandingPage;




