"use client";

import React from "react";
import "../../../styles/global.css";
import RegstrationForm from "../RegistrationForm";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../../logInModal/modalForm.module.scss";

type propsModalLogInContent = {
  onClose: () => void;
};

export default function ModalLogInContent(props: propsModalLogInContent) {
  return (
    <div className="modal">
      <RegstrationForm onClose={props.onClose} />
      <button className={styles.btnClose} onClick={props.onClose}>
        <CloseIcon fontSize="large" />
      </button>
    </div>
  );
}
