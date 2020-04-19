import React, { Component, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from "./Modal";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./ModalStyles.scss";
import goBackButton from '../assets/goBackButton.png';
import '../scss/main.scss';
import { format } from 'date-fns';
import addTask_button from '../assets/add-task.jpg';
import deleteIcon from '../assets/deleteIcon.png';
import editIcon from '../assets/editIcon.png';
import bulletPoint from '../assets/bulletPoint.png';


class AddTask extends Component {
   
    constructor(props) {
        super(props);

        this.state = {
            task: "",
            taskArray : [],
            modal: false,
            editModal: false,
            editIndex: 0,
            name: "",
            modalInputName: "",
            importance: "",
            modalMaxTasks: false,
            date: this.props.match.params.dateString

        }
    }
    
    goBack = () => {
        this.props.history.push('/calendar');
    }

    //*****************MODAL CODE********************* */
    handleMyChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;

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
    
    modalOpen() {
        this.setState({ modal: true });
    }

    modalClose() {
        this.setState({
            modal: false
        });
    }

    editTask(index){
        this.setState({ editModal: true });
        this.setState({ editIndex : index});
    }

    editModalClose(){
        this.setState({ editModal: false});
    }


    handleEdit(){
        const { params: { dateString } } = this.props.match;//*************** */
        var date = dateString;

        var index = this.state.editIndex;
        var LS_Array = JSON.parse(localStorage.getItem(date));
        
        LS_Array[index][0] = this.state.modalInputName;
        LS_Array[index][1] = this.state.importance;

        var newArray = JSON.stringify(LS_Array);
        localStorage.setItem(date, newArray);
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


        if(this.state.importanceColor == "red"){
            var color = "redStyle";
        }

        return(

            todaysTasksArray.map((task, index) => {
                return(
                    <>
                        <div className = "taskBox">
                            <img src={bulletPoint} className='bulletPoint' />
                            <div className='innerTask_AD'>{task[0]}</div>
                            <img className='editIcon'  src={editIcon} onClick={e => this.editTask(index)} />
                            <img className='deleteTask' src={deleteIcon} onClick = {this.deleteTask.bind(this, index, date)}/>
                            
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

    checkForMaxTasks(){
        // const { params: { dateString } } = this.props.match;//*************** */
        // var date = dateString;
        var date = this.state.date;

        var ls_array = JSON.parse(localStorage.getItem(date));

        if(ls_array){
            var arrayLength = ls_array.length;
            if(arrayLength >= 6){
                this.setState({modalMaxTasks: true});
            }else{
                this.setState({modal : true});
            }
        }else{
            this.setState({modal : true});
        }
        
        console.log(arrayLength);
    }

    modalMaxTasksClose(){
        this.setState({ modalMaxTasks : false});
    }

  
    

    //***************************************************************************************************** */
    //***************************************************************************************************** */

    render() {
        const { params: { dateString } } = this.props.match;
        const { date } = this.props.location.state;
        var dateFormat = 'MMMM do';
        var formattedDate = format(date, dateFormat);

        return (
            <>
                <div className='taskHeader'>
                    <div className="todaysDate">{formattedDate}</div>
                    <img src={goBackButton} width='30px' height='30px'onClick = {this.goBack} className='goBackButton'/>
                </div>


                <div className='todaysTasksBG'>
                    <div className='taskTitle'>
                        Today's tasks: 
                        {this.displayTodaysTasks()}
                    </div>
                    
                    

                    <img className='addTaskButton' src={addTask_button} onClick={() => this.checkForMaxTasks()}/>


                    <Modal show={this.state.modal}>
                        <h2>Enter task</h2>

                        <input type="text" value={this.state.modalInputName}
                        name="modalInputName" maxlength = "21" placeholder='Enter task'
                        onChange={e => this.handleMyChange(e)} className="form-control" />

                        {/* <input type = "text" value={this.state.importance} name="importance"
                        onChange={e => this.handleMyChange(e)} className = "form-control"
                        maxlength = "22"/> */}



                        <button className='Button' onClick={e => this.handleSubmit(e)} type="button">Save</button>

                        <button className="modal-close Button" onClick={e => this.modalClose(e)}>close</button>
                    </Modal>





                    <Modal show={this.state.editModal}>

                        <input type="text" value={this.state.modalInputName}
                        name="modalInputName" maxlength = "21" placeholder='Enter task'
                        onChange={e => this.handleMyChange(e)} className="form-control" />

                        {/* <input type = "text" value={this.state.importance} name="importance"
                        onChange={e => this.handleMyChange(e)} className = "form-control"
                        maxlength = "22"/> */}

                        {/* <input type="color" list="presetColors" />
                        <datalist id="presetColors" >
                            <option data-value="red" onClick={e => this.setColor(e)}>#ff0000</option>/>
                            <option data-value="green">#00ff00</option>
                            <option data-value="blue">#0000ff</option>
                        </datalist> */}

                        


                        <button className='Button' onClick={e => this.handleEdit(e)} type="button">Save</button>
                        <button className="modal-close Button" onClick={e => this.editModalClose(e)}>close</button>
                    </Modal>

                    <Modal show={this.state.modalMaxTasks}>
                        <div>You have reached maximum number of tasks!</div>
                        <button className="modal-close Button" onClick={e => this.modalMaxTasksClose(e)}>close</button>
                    </Modal>
                </div>
                
            </>
        );
    }
}
export default AddTask;




























// display(){
    //     const { params: { dateString } } = this.props.match;//*************** */
    //     var date = dateString;

    //     var taskArray = [];

    //     taskArray = JSON.parse(localStorage.getItem(date));

    //     if(taskArray){
    //         console.log("Local Storage array has elements in it!");
    //     }else{
    //         taskArray = this.state.taskArray;
    //     }

    //     return (
    //         <div>
                
    //             {
    //                 taskArray.map((task, index) => {
    //                     return(
    //                         <div key = {index}>
    //                             {task}
    //                             <button onClick = {this.delete.bind(this, index, date)}>delete</button>
    //                         </div>
    //                     ); 
    //                 })
    //             }
                
    //         </div>
    //     );
    // }

    // delete(index, date) {

    //     var oldArray = JSON.parse(localStorage.getItem(date));

    //     oldArray.splice(index,1);
    //     var newArray = JSON.stringify(oldArray);

    //     localStorage.setItem(date,newArray);
    //     this.setState({taskArray : newArray});
    // }

    

    // handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     const { params: { dateString } } = this.props.match;//*************** */
    //     var date = dateString;
        

    //     const newTask = this.state.task;
    //     var newArray = [];

    //     newArray = JSON.parse(localStorage.getItem(date));

    //     if(newArray){
    //         console.log("Elements exist in array");
    //     }else{
    //         newArray = this.state.taskArray;
    //     }

    //     newArray = [...newArray, newTask];
    //     this.setState({ taskArray : newArray});
    //     localStorage.setItem( date , JSON.stringify(newArray));

    // };

    // handleChange = (event) => {
    //     this.setState({ task : event.target.value });
    // };








     {/* <form onSubmit={this.handleFormSubmit}>
                        <label>
                            Add task<input name="task" value={this.state.task} onChange={this.handleChange}/>
                        </label>

                        <button type="submit">Add</button>
                    </form>

                    {this.display()} */}
                    {/* {this.Example()} */}


