import React from "react";
import LogInForm from "../LogInForm";
import '../../../styles/global.css'

type props = {
    onClose: () => void;
}

export default function ModalLogInContent(props: props) {
  return (
      <div className="modal">
        <LogInForm onClose = {props.onClose}/>
        <button onClick={props.onClose}>Close</button>
      </div>
  );
}
