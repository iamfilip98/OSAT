import React, { Component } from 'react';
import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { format } from 'date-fns';
import '../scss/main.scss';

export class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicks : 0
        }
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
        var lengthOfArray = taskArray.length;
        
        return(
            <div className = 'taskBox'>

                {
                    taskArray.map((task) => {
                        return(
                            <>
                                <div className = 'task_HP'>
                                    {task[0]}
                                </div>
                                <input type = "checkbox" width="10px" height="10px" onClick={this.checkBoxClick.bind(this,lengthOfArray)}/>
                                <br></br>
                            </>
                        );
                    })
                }
            </div>
        );
    }

    checkBoxClick(arrayLength){

        this.setState({ clicks : this.state.clicks + 1});

        if(this.state.clicks >= arrayLength-1){
            alert("All tasks completed!!!!!");
            
        }




        
        // var clicks = localStorage.getItem("clicks");
        // var clicksInt = 0;

        // if(clicks){
        //     clicksInt = parseInt(clicks,10);
        //     clicksInt += 1;
        // }else{
        //     clicksInt = 1;
        // }

        // if(clicksInt >= 3){
        //     console.log("all tasks completed!");
        // }

        // var clicksString = clicksInt.toString();
        // localStorage.setItem("clicks", clicksString);

        

    }

    // displayTasksCompleted(){
    //     if(this.state.clicks >= this.state.taskArray.length){
    //         console.log("all tasks completed!")
    //     }else{
    //         console.log("sth")
    //     }
    // }

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

