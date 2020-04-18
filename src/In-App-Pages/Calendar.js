import React, { Component } from 'react';
import { format, addMonths, subMonths, startOfWeek, endOfWeek, addDays, startOfMonth, endOfMonth, isSameMonth, isSameDay, parse } from 'date-fns';
import './Calendar.scss';
import { LinkContainer } from 'react-router-bootstrap';

class Calendar extends React.Component {

    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    };
   
    renderHeader() {
        const dateFormat = "MMMM/yyyy";

        return (
            <div className="header row flex-middle" id = "myRow">
                <div className="col col-start">
                    <div className="icon" onClick={this.prevMonth}>
                    chevron_left
                    </div>
                </div>
                <div className="col col-center">
                    <span>
                    {format(this.state.currentMonth, dateFormat)}
                    </span>
                </div>
                <div className="col col-end" onClick={this.nextMonth}>
                    <div className="icon">chevron_right</div>
                </div>
            </div>
            
        );
    }

    renderDays() {
        const day_format = 'E';
        const weekDays = [];

        const firstDayOfWeek = startOfWeek(this.state.currentMonth);

        for(let i = 0; i < 7; i++){
            weekDays.push(
                <div className = 'col col-center' key={i}>
                    {format(addDays(firstDayOfWeek, i), day_format)}
                </div>
            );
        }
        return(
            <div className = {'weekdays'}>
                {weekDays}
            </div>
        );
    }

    renderCells() { 

        const { currentMonth, selectedDate } = this.state;
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const dateFormat = "d";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";
        // alert(typeof day);

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat); //29

                const cloneDay = day;//29 march, 2020...

                days.push(
                    <LinkContainer to = {{
                        pathname : `/myCalendar/${day}`,
                        state : {
                            date : cloneDay
                            }
                        }}>
                        <div
                            className={`col cell ${!isSameMonth(day, monthStart)? "disabled":
                            isSameDay(day, selectedDate) ? "selected" :
                            isSameDay(day, new Date())? "today":
                            "" }`}
                            key={day}
                        >
                        {/* this.onDateClick(cloneDay) */}
                        
                                <span className="number">{formattedDate}</span>
                                <span className="bg">{formattedDate}</span>
                            

                        </div>
                    </LinkContainer>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div className="row" id = "myRow" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
        
    }

    


    onDateClick = (day) => {
        this.setState({
        selectedDate: day
      });
    };

    nextMonth = () => {
        this.setState({
            currentMonth: addMonths(this.state.currentMonth, 1)
          });
    };

    prevMonth = () => {
        this.setState({
            currentMonth: subMonths(this.state.currentMonth, 1)
          });
    };

    render() {
        
        return (
            
            
            <div className = 'calendar'>
                {/* <form onSubmit = {this.props.changeDisplay}>
                    Enter something here<input type = "text" value = ""/>
                    <button> display in HomePage</button>
                </form> */}
                

                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}


            </div>   
        );
    }
}

export default Calendar;

















