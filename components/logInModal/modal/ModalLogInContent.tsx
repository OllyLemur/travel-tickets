import React from "react";
import LogInForm from "../LogInForm";
import "../../../styles/global.css";
import styles from "../modalForm.module.scss";
import CloseIcon from "@mui/icons-material/Close";

type propsModalLogInContent = {
  onClose: () => void;
};

export default function ModalLogInContent(props: propsModalLogInContent) {
  return (
    <div className="modal">
      <LogInForm onClose={props.onClose} />
      <button className={styles.btnClose} onClick={props.onClose}>
        <CloseIcon fontSize="large" />
      </button>
    </div>
  );
}
