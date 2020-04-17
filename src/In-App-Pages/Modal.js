import React from "react";
import './ModalStyles.scss';





class Modal extends React.Component {

  render(){
    const showHideClassName = this.props.show ? "modal d-block" : "modal d-none";
    console.log("entered modal!");
    return (
      <div className={showHideClassName}>
        <div className="modal-container">
          {this.props.children}
          <button className="modal-close" onClick={this.props.handleClose}>
            close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
