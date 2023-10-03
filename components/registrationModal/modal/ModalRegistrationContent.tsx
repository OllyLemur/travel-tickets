"use client";

import React from "react";
import "../../../styles/global.css";
import RegstrationForm from "../RegistrationForm";

type propsModalLogInContent = {
  onClose: () => void;
};

export default function ModalLogInContent(props: propsModalLogInContent) {

  return (
    <div className="modal">
      <RegstrationForm onClose={props.onClose} />
      <button onClick={props.onClose}>Close</button>
    </div>
  );
}
