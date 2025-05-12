// src/components/molecules/LoginForm/LoginForm.jsx
import React from 'react';
import styles from '../../pages/Login/Login.module.scss';
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

const LoginForm = ({ onSubmit, register, errors }) => {
  return (
    <form onSubmit={onSubmit} className={styles.loginForm}>
      <InputField
      // id="standard-basic"
        label="Username"
        name="username"
        register={register}
        error={errors.username?.message}
        icon={faUser} // Use the imported icon object
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        register={register}
        error={errors.password?.message}
        icon={faLock} // Use the imported icon object
      />
      <Button type="submit" label="Login Now" />
    </form>
  );
};

export default LoginForm;
















