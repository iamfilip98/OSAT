import React, { Component } from 'react'
import '../../scss/main.scss';
import Button from 'react-bootstrap/Button';

class AddResource extends Component {
  //empty state to contain user inputs
  state = {
    title: '',
    content: ''
    
  }

  //sets the content/title of resource equal to whatever the user types. the event "e" is the user typing
  handleChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  handleSubmit = (e) => {
    // //e.preventDefault() prevents website from refreshing every time user presses enter
     e.preventDefault();
    this.props.addResource(this.state);
    //set user inputs to emtpy after adding resource
    this.setState({
      title: '',
      content: ''
    });
  }


  render() {
    return (
      //form for user inputs
      <div>
        <form  onSubmit={this.handleSubmit}>
          <h5 class="headingLabel">Add a new resource</h5>

          <label class="black-text">Title</label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChangeHandler} /><br/>
          <label class="black-text">Content</label>
          <input  type="text" name="content" value={this.state.content} onChange={this.handleChangeHandler} class="textinput" />
          
          {/* <div class="infoLabel"> 
            <label>To deleted add a resource you enter your information and click on the "SUBMIT" button</label><br/>
            <label>To deleted a resource you must open a resource and click on the "DELETE" button</label>
          </div> */}
          
          <div class="section">
            <button id="submitbtn" class="waves-effect waves-light btn Button" type="submit">Submit</button>
            <button id="homepagebtn" class="waves-effect waves-light blue btn Button" type="submit">Home Page</button>
            <button id="deltebtn" class="waves-effect waves-light btn Button" type="submit" onClick={this.props.deleteResource}>Delete</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddResource