import React, { Component, useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class AddTask extends Component {
   
    state = {
        task: '',
        taskArray : []
    };
     
    

    display(){
        const { params: { dateString } } = this.props.match;//*************** */
        var date = dateString;
        console.log("Here:");
        console.log(date);
        console.log("it is");
        var taskArray = [];

        taskArray = JSON.parse(localStorage.getItem(date));

        if(taskArray){
            console.log("Local Storage array has elements in it!");
            // taskArray = JSON.parse(localStorage.getItem('taskArray'));
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
        console.log(index);
        console.log(date);

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
            // taskArray = JSON.parse(localStorage.getItem('taskArray'));
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


    // Example = (e) => {
    //     const [show, setShow] = useState(false);
      
    //     const handleClose = () => setShow(false);
    //     const handleShow = () => setShow(true);
      
    //     return (
    //       <>
    //         <Button variant="primary" onClick={handleShow}>
    //           Launch demo modal
    //         </Button>
      
    //         <Modal show={show} onHide={handleClose}>
    //           <Modal.Header closeButton>
    //             <Modal.Title>Modal heading</Modal.Title>
    //           </Modal.Header>
    //           <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    //           <Modal.Footer>
    //             <Button variant="secondary" onClick={handleClose}>
    //               Close
    //             </Button>
    //             <Button variant="primary" onClick={handleClose}>
    //               Save Changes
    //             </Button>
    //           </Modal.Footer>
    //         </Modal>
    //       </>
    //     );
    // }




    render() {
        const { params: { dateString } } = this.props.match;
        console.log(dateString);
        var newString = dateString.substring(3,10);

        //var formattedDate = 


        //{format(dateString, dateFormat)}


        return (
            <>
                <div>
                    <div>{newString}</div>
                    <form onSubmit={this.handleFormSubmit}>
                        <label>
                            Add task<input name="task" value={this.state.task} onChange={this.handleChange}/>
                        </label>

                        <button type="submit">Add</button>
                    </form>

                    {this.display()}
                    {/* {this.Example()} */}
                    
                </div>
                
            </>

            

        );
    }
}
export default AddTask;



//TIMER FUNCTION:
 // constructor(props){
    //     super(props);
    //     this.state = {
    //       data: 'Jordan Belfort'
    //     }
    // }
    
    // getData(){
    // setTimeout(() => {
    //     console.log('Our data is fetched');
    //     this.setState({
    //     data: 'Hello WallStreet'
    //     })
    // }, 3000)
    // }
    
    // componentDidMount(){
    // this.getData();
    // }
    
    // render() {
    //     console.log("rendered!");
    // return(
    //     <div>
    //         {this.state.data}
    //     </div>
    //     );
    
    // }





















// const AddTask = () => {
   

//     // const [value, setValue] = useState(
//     //     localStorage.getItem('myValueInLocalStorage') || ''
//     //     );

//     // useEffect(() => {
//     //     localStorage.setItem('myValueInLocalStorage', value);
//     //   }); //, [value]

//     // const onChange = event => setValue(event.target.value);

//     // return (
//     //   <div>
//     //         Add task
//     //         <form onSubmit={onChange}>
//     //             <input value={value} onChange = {onChange} placeholder = "Enter task..." type="text"  />
//     //             <button>Click to submit</button>
//     //         </form>
//     //     <ul>
//     //         <li><bold>{value}</bold></li>
//     //     </ul>
//     //   </div>
//     // );
// }




