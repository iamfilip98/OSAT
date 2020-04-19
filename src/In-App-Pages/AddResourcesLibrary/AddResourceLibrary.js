import React, { useState } from 'react';
import Header from './Header';
import Resource from './Resource';
import AddResource from './AddResource'
import './index.css'

function App () {
  const [resource, setresource] = useState([
 
  ]);

  //this function changes state of any buttons that is clicked on by the user.
  const toggleResource = index => {
    setresource(resource.map((resource, i) => {
      if (i === index) {
        resource.open = !resource.open;
      } else {
        //this line allows only one button to be open.
        resource.open = false;
      }

      return resource;
    }))
  };

  //this function is for deleteing a resource if the resource is open
  const deleteResource = () => {
    //crearte a copy of resources without the deleted/opened resource
    let resource2 = resource.filter(resource => {
      return resource.open !== true
    });
    setresource(resource2);
  }

  const addResource = (resourceNew) => {
    if(resourceNew.content.length > 2){
      //adding missing properties of new resource
      resourceNew.title = resourceNew.title;
      resourceNew.content = resourceNew.content;
      resourceNew.open = false;
      //assigns a random number for the resource id
      resourceNew.id = Math.random();
      //adds and set the new resource
      let resource1 = [...resource, resourceNew];
      setresource(resource1);
    }
  }

  //component that displays everything
  return (
    <div className="App">
      <Header /> 
      <div className="resource">
        {/* for every resource in the resource array, JSX code must be returned. */}
        {resource.map((resource, i) => (
          <Resource resource={resource} index={i} toggleResource={toggleResource} deleteResource={deleteResource} />
        ))}
        {/* this component is responsible for adding resourcecs and containing the submit and delete buttons*/}
        <AddResource addResource={addResource} deleteResource={deleteResource}/>
      </div>
    </div>
  );
}

export default App;
