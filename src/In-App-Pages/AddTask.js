import React, { Component, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from "./Modal";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./ModalStyles.scss";
import goBackButton from '../assets/goBackButton.png';
import '../scss/main.scss';
import { format } from 'date-fns';
import addTask_button from '../assets/add-task.jpg';

class AddTask extends Component {
   
    constructor(props) {
        super(props);

        this.state = {
            task: "",
            taskArray : [],
            modal: false,
            name: "",
            modalInputName: "",
            importance: ""

        }
    }
    

    display(){
        const { params: { dateString } } = this.props.match;//*************** */
        var date = dateString;

        var taskArray = [];

        taskArray = JSON.parse(localStorage.getItem(date));

        if(taskArray){
            console.log("Local Storage array has elements in it!");
        }else{
            taskArray = this.state.taskArray;
        }

        return (
            <div>
                
                {
                    taskArray.map((task, index) => {
                        return(
                            <div key = {index}>
                                {task}
                                <button onClick = {this.delete.bind(this, index, date)}>delete</button>
                            </div>
                        ); 
                    })
                }
                
            </div>
        );
    }

    delete(index, date) {

        var oldArray = JSON.parse(localStorage.getItem(date));

        oldArray.splice(index,1);
        var newArray = JSON.stringify(oldArray);

        localStorage.setItem(date,newArray);
        this.setState({taskArray : newArray});
    }

    

    handleFormSubmit = (e) => {
        e.preventDefault();
        const { params: { dateString } } = this.props.match;//*************** */
        var date = dateString;
        

        const newTask = this.state.task;
        var newArray = [];

        newArray = JSON.parse(localStorage.getItem(date));

        if(newArray){
            console.log("Elements exist in array");
        }else{
            newArray = this.state.taskArray;
        }

        newArray = [...newArray, newTask];
        this.setState({ taskArray : newArray});
        localStorage.setItem( date , JSON.stringify(newArray));

    };

    handleChange = (event) => {
        this.setState({ task : event.target.value });
    };



    goBack = () => {
        this.props.history.push('/calendar');
    }

    //*****************MODAL CODE********************* */
    handleMyChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        console.log("handlechange function!");
        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        // this.setState({ name: this.state.modalInputName });
        // this.setState({ importance: this.state.importance});


        const { params: { dateString } } = this.props.match;//*************** */
        var date = dateString;

        const info1 = this.state.modalInputName;
        const info2 = this.state.importance;
        var newArray = [];

        newArray[0] = info1;
        newArray[1] = info2;

        var LS_Array = JSON.parse(localStorage.getItem(date));

        if(LS_Array){
            console.log("Elements exist in array");
        }else{
            LS_Array = [];
        }

        LS_Array = [...LS_Array, newArray];
        console.log(LS_Array);

        //newArray = [...newArray, newTask];
        //this.setState({ taskArray : newArray});
        localStorage.setItem( date , JSON.stringify(LS_Array));

        this.modalClose();
    }
    
    modalOpen(task) {
        this.setState({ modal: true });
        this.setState({ modalInputName : task[0]});
        this.setState({ importance : task[1]});
    }

    modalClose() {
        this.setState({
            modal: false
        });
    }


    displayTodaysTasks() {
        const { params: { dateString } } = this.props.match;//*************** */
        var date = dateString;
        var todaysTasksArray = JSON.parse(localStorage.getItem(date));

        if(todaysTasksArray){
            console.log("Elements exist in array");
        }else{
            todaysTasksArray = [];
        }

        return(

            todaysTasksArray.map((task, index) => {
                return(
                    <>
                        <div className = "taskBox">
                            <button onClick={e => this.modalOpen(task)}>
                                {task[0]}
                            </button>
                            
                            <button onClick = {this.deleteTask.bind(this, index, date)}>Delete</button>
                        </div>
                        <br></br>
                    </>
                );
            })
            
        );
    }

    deleteTask(index, date){
        var oldArray = JSON.parse(localStorage.getItem(date));

        oldArray.splice(index,1);
        var newArray = JSON.stringify(oldArray);

        localStorage.setItem(date,newArray);
        this.setState({taskArray : newArray});
    }

    //*****************MODAL CODE********************* */

    render() {
        const { params: { dateString } } = this.props.match;

        // var newString = dateString.substring(3,10);

        const { date } = this.props.location.state;

        var dateFormat = 'MMMM do';

        var formattedDate = format(date, dateFormat);
        // var dateObject = JSON.parse(dateString);
        
        console.log(formattedDate);
        // alert(typeof date);



        return (
            
            <>

           
                <div>
                    <div className="todaysDate">{formattedDate}</div>
                    {/* <form onSubmit={this.handleFormSubmit}>
                        <label>
                            Add task<input name="task" value={this.state.task} onChange={this.handleChange}/>
                        </label>

                        <button type="submit">Add</button>
                    </form>

                    {this.display()} */}
                    {/* {this.Example()} */}
                    <img src={goBackButton} width='30px' height='30px'onClick = {this.goBack} className='goBackButton'/>


                </div>


                <div className='todaysTasksBG'>
                    <h1 className='taskTitle'>Today's tasks: {this.displayTodaysTasks()}</h1>
                    <h3>Importance level: {this.state.importance}</h3>
                    <img className='addTaskButton' src={addTask_button} onClick={() => this.setState({ modal: true })}/>


                    <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>
                        <h2>Hello Modal</h2>
                        <div className="form-group">
                            <label>Enter Name:</label>

                            <input type="text" value={this.state.modalInputName}
                            name="modalInputName" onChange={e => this.handleMyChange(e)}
                            className="form-control" />

                            <input type = "text" value={this.state.importance} name="importance"
                            onChange={e => this.handleMyChange(e)} className = "form-control"/>

                        </div>
                        <div className="form-group">
                            <button onClick={e => this.handleSubmit(e)} type="button">
                            Save
                            </button>
                        </div>
                    </Modal>
                </div>
                
            </>

            

            

        );
    }
}
export default AddTask;

