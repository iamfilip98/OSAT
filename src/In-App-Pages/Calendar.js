import React, { Component } from 'react';
import { format, addMonths, subMonths, startOfWeek, endOfWeek, addDays, startOfMonth, endOfMonth, isSameMonth, isSameDay, parse } from 'date-fns';
import './Calendar.scss';
import AddTask from './AddTask';
import { LinkContainer } from 'react-router-bootstrap';

class Calendar extends React.Component {

    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    };
   
    renderHeader() {
        const dateFormat = "MMMM/yyyy";

        return (
            <div className="header row flex-middle">
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

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat); //29

                const cloneDay = day;//29 march, 2020...

                days.push(
                    <LinkContainer to = {`/myCalendar/${day}`}>
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
                <div className="row" key={day}>
                {days}
                </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
        
    }

    // goToAddTask = () => {
    //     console.log("reached function!");
    //     return(<AddTask />);
    // }

    


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
        
        //console.log(this.state.currentMonth);
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

















// <table>
            //     <tr>
            //         <th>Mon</th>
            //         <th>Tue</th>
            //         <th>Wed</th>
            //         <th>Thu</th>
            //         <th>Fri</th>
            //         <th>Sat</th>
            //         <th>Sun</th>
            //     </tr>

            //     <tr>
            //         <td class = "empty"></td>
            //         <td>1</td>
            //         <td>2</td>
            //         <td>3</td>
            //         <td>4</td>
            //         <td>5</td>
            //         <td>6</td>
            //     </tr>

            //     <tr>
            //         <td>7</td>
            //         <td>8</td>
            //         <td>9</td>
            //         <td>10</td>
            //         <td>11</td>
            //         <td>12</td>
            //         <td>13</td>
            //     </tr>

            //     <tr>
            //         <td>14</td>
            //         <td>15</td>
            //         <td>16</td>
            //         <td>17</td>
            //         <td>18</td>
            //         <td>19</td>
            //         <td>20</td>
            //     </tr>

            //     <tr>
            //         <td>21</td>
            //         <td>22</td>
            //         <td>23</td>
            //         <td>24</td>
            //         <td>25</td>
            //         <td>26</td>
            //         <td>27</td>
            //     </tr>

            //     <tr>
            //         <td>28</td>
            //         <td>29</td>
            //         <td>30</td>
            //         <td>31</td>
            //         <td class = "empty" colspan = "3"></td>   
            //     </tr>

            //     <tr class = "bottomline">
            //         <td colspan = "3">December</td>
            //         <td></td>
            //         <td colspan = "3">February</td>
            //     </tr>
            // </table>
