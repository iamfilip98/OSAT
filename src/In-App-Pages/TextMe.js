import React, { Component } from 'react';
import Chat from '../Chat';



class TextMe extends Component {
    
    render() {
        return (
            <div>
                <div class="b-chat">
                    <div class="b-chat__container">
                        <div id="chat"></div>
                        <Chat />
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default TextMe;
