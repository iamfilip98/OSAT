import React, { Component } from 'react'

class LandingPage extends Component {
    constructor(props){
        super(props);
    
        this.state={ 
            homepage: true,
            calendar: false,
            library: false,
            settings: false
      }



    render() {
        return (
            <div>
                Landing page!
                <Navbar/>
                {this.state.homepage ? <Home/> : null}
            </div>
        )
    }
}

export default LandingPage
