"use client";

import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalLogInContent from "./ModalLogInContent";
import ModalOverlay from "./ModalOverlay";
import styles from "../modalForm.module.scss"

export default function ModalLogIn() {
  const [showModal, setShowModal] = useState(false);

  const onCloseHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className={styles.btn} onClick={() => setShowModal(true)}>Log In</button>
      {showModal &&
        createPortal(
          <ModalOverlay onClose={onCloseHandler}>
            <ModalLogInContent onClose={onCloseHandler} />
          </ModalOverlay>,
          document.body
        )}
    </>
  );
}
