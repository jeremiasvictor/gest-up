import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { FaTimes } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean; //se o modal ta aberto ou nao
  onClose: () => void; //funcao pra fechar o modal
  children: React.ReactNode; //conteudo do modal
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  //createPortal pra "teleportar" o jsx pro fim do body
  return ReactDOM.createPortal(
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div
        className={styles.modalContent}
        // impedir que cliques dentro do modal fechem ele
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
        {children}
      </div>
    </div>,
    // o destino do "teletransporte": o div #modal-root no index.html
    document.getElementById("modal-root")!
  );
}

export default Modal;
