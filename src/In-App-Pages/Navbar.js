  
import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div style = {navbarStyle}>
                Bottom bit:________________________________________
            </div>
        )
    }
}

const navbarStyle = {
    position: 'relative',
    left: '100px',
    top: '300px',
}

export default Navbar