import React, { Component } from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router, Link, NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Calendar from './Calendar';


class HomePage extends Component {
    constructor(props){
        super(props);
    
        this.state={ 
            homepage: true,
            calendar: false,
            library: false,
            settings: false
      }
    }



    render() {
        return (
            <Router>
                <div>


                     
                    <Route exact path='/' render ={
                            () => {
                                return (<h1>HomePage!</h1>);
                            }
                        }/>
                    <div style = {homePageButton}>    
                        <NavLink exact to='/' activeStyle ={
                             {color: 'green'}}>Home</NavLink> 
                    </div> 

                    
                    <Route exact path='/calendar' render={
                            () => {
                                return (<Calendar/>);
                            }
                        }/> 
                    <div style = {calendarButton}>
                        <NavLink exact to='/calendar' activeStyle ={
                            {color: 'green'}}>Calendar</NavLink>
                    </div>
                    

                        
                    
                    
                    
                    
                
                   
                    
                    
                
                </div>
            </Router>
            
        )
    }
}
const homePageButton= {
    position: 'absolute',
    top: '600px',
    left: '55px',

}

const calendarButton = {
    position: 'absolute',
    top: '600px',
    left: '125px',
}

export default HomePage;