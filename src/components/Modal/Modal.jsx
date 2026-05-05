import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

export default function Modal({ title = "", isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {title && <h2 className={styles.modalTitle}>{title}</h2>}
        {children}
      </div>
    </div>,
    document.getElementById("modal-root"),
  );
}
