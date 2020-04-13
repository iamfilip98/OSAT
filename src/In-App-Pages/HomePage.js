import React, { Component } from 'react';
import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { format } from 'date-fns';
import '../scss/main.scss';

export class HomePage extends Component {
    constructor(props) {
        super(props);

    }

    displayTasks(){

        
        var dateToday = new Date();
        var dateFormat = "E LLL d y ";

        var formattedDate = format(dateToday, dateFormat);
        var extraString = "00:00:00 GMT+0100 (British Summer Time)";

        var newString = formattedDate.concat(extraString);

        var taskArray = JSON.parse(localStorage.getItem(newString));

        if(taskArray){
            console.log("taskArray exists!");
            
        }else{
            taskArray = [];
        }
        
        return(
            <div className = 'taskBox'>

                {
                    taskArray.map((task) => {
                        return(
                            <>
                                <div className = 'task_HP'>
                                    {task}
                                </div>
                                <br></br>
                            </>
                        );
                    })
                }
            </div>
        );
    }

    render() {
        return (
            <>

                <h2>Today's tasks:</h2>
                {this.displayTasks()}
            </>
        );
    }  
}

export default HomePage;

