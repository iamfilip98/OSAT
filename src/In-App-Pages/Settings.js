import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './About';
class Settings extends Component {
    render() {
        const Buttonink = () => (
            <Route render={({ history}) => (
                <button type='button' onClick={() => { history.push('/new-location') }}>
                    <About />
                </button>
            )} />
            )
        return (
            <div>
                <Buttonink></Buttonink>
            </div>
        );
    }
}

export default Settings;
