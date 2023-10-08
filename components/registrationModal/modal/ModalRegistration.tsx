"use client";

import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalRegistrationContent from "./ModalRegistrationContent";
import ModalOverlay from "@/components/logInModal/modal/ModalOverlay";
import styles from '../../logInModal/modalForm.module.scss'

export default function ModalRegistration() {
  const [showModal, setShowModal] = useState(false);

  const onCloseHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className={styles.btn} onClick={() => setShowModal(true)}>Registration</button>
      {showModal &&
        createPortal(
          <ModalOverlay onClose={onCloseHandler}>
            <ModalRegistrationContent onClose={onCloseHandler}/>
          </ModalOverlay>,
          document.body
        )}
    </>
  );
}
