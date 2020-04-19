import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import addResource from './AddResourcesLibrary/AddResourceLibrary';
import viewResources from './viewResourcesLibrary/viewResources';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import '../scss/main.scss';

export class Library extends Component {
    render() {
        return (

            <Router>

                <Switch>
                    <Route exact path="/AddResources/AddResourceLibrary" component={addResource}/>
                    <Route exact path="/viewResources/viewResourcesLibrary" component={viewResources}/>
                </Switch>


                <LinkContainer to = "/AddResources/AddResourceLibrary">
                    <Button className='Button'>Add resources</Button>
                </LinkContainer>

                <LinkContainer to = "/viewResources/viewResourcesLibrary">
                    <Button className='Button'>View resources</Button>
                </LinkContainer>
        
            </Router>

        );
    }
}

export default Library;
