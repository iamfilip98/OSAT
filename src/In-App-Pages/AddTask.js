import React, { Component, useState, useEffect } from 'react';


class AddTask extends Component {
   
    state = {
        task: '',
        taskArray : []
        // rememberMe: false
    };
     

    display(){
        var taskArray = [];
        if(this.state.taskArray.length > 0){
            taskArray = JSON.parse(localStorage.getItem('taskArray'));
        }else{
            taskArray = this.state.taskArray;
        }

        return (
            <div>
                <ul>
                    {
                        taskArray.map((ind_task) => {
                            return(
                            <li>{ind_task}</li>
                            ); 
                        })
                    }
                </ul>
            </div>
        );
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        
        const newTask = this.state.task;
        const newArray = [...this.state.taskArray, newTask];
        this.setState({ taskArray : newArray})
        
        localStorage.setItem('taskArray', JSON.stringify(newArray));

    };

    handleChange = (event) => {
        this.setState({ task : event.target.value });
    };

    render() {
        
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>
                        Add task<input name="task" value={this.state.task} onChange={this.handleChange}/>
                    </label>

                    <button type="submit">Add</button>
                </form>

                {this.display()}
                
            </div>

            

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




