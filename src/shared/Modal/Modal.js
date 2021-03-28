import React from "react";
import { Component } from "react";
//https://webomnizz.com/create-simple-modal-pop-up-with-react/
//https://www.digitalocean.com/community/tutorials/react-modal-component
import "./Modal.css";

class Modal extends Component {
  render() {
    return (
      <div className="modal display-block">
        <section className="modal-main">{this.props.children}</section>
      </div>
    );
  }
}

export default Modal;
