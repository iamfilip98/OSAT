import React, { Component } from 'react';
import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { format } from 'date-fns';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import { LinkContainer } from 'react-router-bootstrap';


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
            <div>

                {
                    taskArray.map((task) => { 
                        return(
                            <div>
                                {task}
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    
    render() {
        return (
            <>
                 <h1 className = 'header'>Welcome to OSAT!</h1>
                <Card border = 'warning' bg={'info'} text={'light'}>
                    

                    <Card.Header>Daily Motivation</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                                Last week, you completed 3 tasks! This week, you are on track to complete 5. Keep going and don't forget to smile!
                            {' '}
                        </p>
                       
                        </blockquote>
                    </Card.Body>
                </Card>
                
                <h2>................................................</h2>
                <h2>Today's Tasks</h2>
                
               
               

               
                    {this.displayTasks()}
            </>
        );
    }  
}

export default HomePage;

