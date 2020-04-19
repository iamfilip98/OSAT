import React, { Component } from 'react';
import { format } from 'date-fns';
import Card from 'react-bootstrap/Card';
import '../scss/main.scss';
import bulletPoint from '../assets/bulletPoint.png';
import Modal from './Modal';

export class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicks : 0,
            modal: false
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
            <div>

                {
                    taskArray.map((task) => { 
                        return(
                            <>
                                <div className = 'task_HP'>
                                    <img src={bulletPoint} className='bulletPoint_HP' />
                                    <div className='innerTask_HP'>{task[0]}</div>
                                    <input id='checkbox_HP' type = "checkbox" width="10px" height="10px" onClick={this.checkBoxClick.bind(this,lengthOfArray)}/>
                                </div>
                                <br></br>
                                

                            </>
                        );
                    })
                }
            </div>
        );
    }

    openModal(){
        this.setState({ modal : true});
    }

    closeModal(){
        this.setState({ modal : false});
    }

    checkBoxClick(arrayLength){

        this.setState({ clicks : this.state.clicks + 1});

        if(this.state.clicks >= arrayLength-1){
            // alert("All tasks completed!!!!!");
            this.openModal();
            
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


                <Modal show={this.state.modal}>
                    <h3>All of today's tasks has been completed. Good job!</h3>
                    <br></br>
                    <div>Give yourself a treat. Studies show that by rewarding yourself after completing
                    some difficult task, the hormone Dopamine is released, which may help to keep
                    your motivation up!</div>
                    <button className='Button' onClick={this.closeModal.bind(this)}> close</button>
                </Modal>

                {/* //onClick = {this.delete.bind(this, index, date)} */}

            </>
        );
    }  
}

export default HomePage;

