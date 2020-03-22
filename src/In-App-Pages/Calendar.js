import React, { Component } from 'react';
import CalendarIMG from '../assets/calendar.jpeg';

class Calendar extends Component {
    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <img src= {CalendarIMG} width = '300' height='200'/>
            </div>
        );
    }
}

export default Calendar;
