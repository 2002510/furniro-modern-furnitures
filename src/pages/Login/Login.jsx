// src/pages/Login/Login.jsx
import React from 'react';
import styles from './Login.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from '../../utils/validationSchema';
import loginData from '../../data/loginData';
import placeholderImage from '../../assets/images/login-placeholder.png';
import placeholderImage1 from '../../assets/images/login-placeholder-1.png';
import placeholderImage2 from '../../assets/images/login-placeholder-2.png';
import placeholderImage5 from '../../assets/images/login-placeholder-5.png';
import LoginForm from '../../components/molecules/LoginForm';
import SocialLogin from '../../components/molecules/SocialLogin';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faLock);

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = (data) => {
    console.log('Form data:', data);
    navigate('/home');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formSection}>
        <h2 className={styles.title}>{loginData.title}</h2>
        <p className={styles.subTitle}>{loginData.subtitle}</p>
        <LoginForm onSubmit={handleSubmit(onSubmit)} register={register} errors={errors} />
        <SocialLogin />
      </div>
      <div className={styles.imageSection}>
        <div className={styles.imageOverlay}>
          <p className={styles.overlayText}>Very good <br />works are<br /> waiting for<br />  you Login<br />  Now!!!</p>
          <img src={placeholderImage} alt="Background  Visual" className={styles.overlayImage} />
          <img src={placeholderImage1} alt="Main Visual" className={styles.overlayImage1} />
          <img src={placeholderImage2} alt="Top Floating Visual" className={styles.overlayImage2} />
          <img src={placeholderImage5} alt="Bottom Floating Visual" className={styles.overlayImage5} />
        </div>
      </div>
    </div>
  );
};

export default Login;

















