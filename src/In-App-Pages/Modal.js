import React from "react";
import './ModalStyles.scss';





class Modal extends React.Component {

  render(){
    const showHideClassName = this.props.show ? "modal d-block" : "modal d-none";

    return (
      <div className={showHideClassName}>
        <div className="modal-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
