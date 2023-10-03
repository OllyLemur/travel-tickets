"use client";

import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalLogInContent from "./ModalLogInContent";

export default function ModalLogIn() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal &&
        createPortal(
          <ModalLogInContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
