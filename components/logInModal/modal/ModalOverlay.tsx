import React, { ReactNode } from "react";
import "../../../styles/global.css";

type ModalOverlayProps = {
  children: ReactNode;
  onClose: () => void;
};

export default function ModalOverlay(props: ModalOverlayProps) {
  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.currentTarget === e.target && props.onClose()}
    >
      {props.children}
    </div>
  );
}
