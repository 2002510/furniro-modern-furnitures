// src/components/atoms/Modal/Modal.jsx
import React from 'react';
import styles from './Modal.module.scss'; // Ensure this import is correct

const Modal = ({ onClose, children }) => {
 return (
  <div className={styles.modalOverlay}>
   <div className={styles.modalContent}>
    <button className={styles.closeButton} onClick={onClose}>X</button>
    {children}
   </div>
  </div>
 );
};

export default Modal;