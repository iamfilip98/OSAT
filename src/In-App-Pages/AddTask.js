import React, { Component, useState, useEffect } from 'react';


class AddTask extends Component {
   
    state = {
        task: '',
        taskArray : []
    };
     

    display(){
        const { params: { dateObject } } = this.props.match;//*************** */
        var date = JSON.stringify(dateObject);
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
                <ul>
                    {
                        taskArray.map((task) => {
                            return(
                            <li>{task}</li>
                            ); 
                        })
                    }
                </ul>
            </div>
        );
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const { params: { dateObject } } = this.props.match;//*************** */
        var date = JSON.stringify(dateObject);
        

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

    render() {
        const { params: { dateObject } } = this.props.match;

        return (
            <>
                <div>
                    <form onSubmit={this.handleFormSubmit}>
                        <label>
                            Add task<input name="task" value={this.state.task} onChange={this.handleChange}/>
                        </label>

                        <button type="submit">Add</button>
                    </form>

                    {this.display()}
                    
                </div>
                <div>Today's date is {dateObject}'th</div>
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




