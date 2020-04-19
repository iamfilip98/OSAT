import React from 'react';
import './scss/main.scss';

class Question3 extends React.Component {
  constructor(props) {
      super(props);
  }



  render() {
    return (
      <div className="login">
        <main>
            <div className="box">
                Are you internally or externally motivated?
            </div>
            

            <button className="Button" onClick={this.props.handleClick}>Internally</button>
            <button className="Button" onClick={this.props.handleClick}>Externally</button>
        </main>
      </div>
    );
  }
}

export default Question3;
