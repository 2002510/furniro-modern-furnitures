// src/components/molecules/SocialLogin.jsx
import React from 'react';
import styles from '../../pages/Login/Login.module.scss';
import googleIcon from '../../assets/images/google-icon.png';
import facebookIcon from '../../assets/images/facebook-icon.png';

const SocialLogin = () => {
  return (
    <div className={styles.loginWithOthers}>
      <span>━━━━ Login with Others ━━━━</span>
      <button className={styles.socialButton}>
        <img src={googleIcon} alt="Google" />
       <b> Login with google</b>
      </button>
      <button className={styles.socialButton}>
        <img src={facebookIcon} alt="Facebook" />
       <b> Login with Facebook</b>
      </button>
    </div>
  );
};

export default SocialLogin;