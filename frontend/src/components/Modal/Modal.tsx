import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

import { FaTimes } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  contentClassName?: string; //option prop to receive style
  closeOnBackdropClick?: boolean;
}

function Modal({
  isOpen,
  onClose,
  children,
  contentClassName,
  closeOnBackdropClick = true,
}: ModalProps) {
  if (!isOpen) {
    return null;
  }

  //combines default class with received one (if exists)
  const modalContentClasses = `${styles.modalContent} ${
    contentClassName || ""
  }`;

  const handleBackdropClick = () => {
    if (closeOnBackdropClick) {
      onClose();
    }
  };

  //createPortal to "teleport" jsx to end of body
  return ReactDOM.createPortal(
    <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
      <div
        className={modalContentClasses}
        //prevent clicks inside modal close it
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
        {children}
      </div>
    </div>,
    //destination of "teleport": the #modal-root div in index.html
    document.getElementById("modal-root")!
  );
}

export default Modal;
