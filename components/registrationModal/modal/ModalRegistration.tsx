"use client";

import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalRegistrationContent from "./ModalRegistrationContent";
import ModalOverlay from "@/components/logInModal/modal/ModalOverlay";

export default function ModalRegistration() {
  const [showModal, setShowModal] = useState(false);

  const onCloseHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>Regiatration</button>
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
