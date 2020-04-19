import React from 'react';
import './scss/main.scss';

class Question1 extends React.Component {
  constructor(props) {
      super(props);
  }





  render() {
    return (
      <div className="login">
        <main>
            <div className="box">
                Do you prefer to study at night or during the day?
            </div>
            

            <button className="Button" onClick={(e) => {this.props.handleClick(e); this.props.handleNight(e)}} >Night</button>
            <button className="Button" onClick={(e) => {this.props.handleClick(e); this.props.handleDay(e)}}>Day</button>
        </main>
      </div>
    );
  }
}

export default Question1;
