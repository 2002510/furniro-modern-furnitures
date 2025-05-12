// src/components/atoms/Button/Button.jsx
import React from 'react';
import styles from '../../pages/Login/Login.module.scss';

const Button = ({ label, type = 'button', ...props }) => (
  <button type={type} className={styles.loginButton} {...props}>
    {label}
  </button>
);

export default Button;