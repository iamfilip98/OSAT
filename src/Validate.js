import React, {Component} from 'react';




class Validate extends Component {

    constructor(props) {
        super(props);
        this.state={validatescreen: false,
        username : "pepe",
        password : "1234"
        }
        
    }


  render() {
    const{userusername, userpassword} = this.props;
    return (
      <div className="validate">
        
        <main>
            Validated!
            <div>
              
            </div>
            test : {this.props.username}

            
        </main>
      </div>
    );
  }
}

export default Validate;
