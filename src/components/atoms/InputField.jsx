// src/components/atoms/InputField/InputField.jsx
import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import styles from '../../pages/Login/Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputField = ({ label, name, type = 'text', register, error, icon }) => (
  <div className={styles.inputField}>
    <div className={styles.inputWrapper}>
      <TextField
        type={type}
        label={label}
        id={name}
        name={name}
        variant="standard"
        {...register(name)}
        error={!!error}
        helperText={error}
        FormHelperTextProps={{ style: { textAlign: 'left' } }}
        fullWidth
        size="medium"
        InputProps={
          icon ? {
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon={icon} className={styles.inputIcon} />
              </InputAdornment>
            ),
          } : {}
        }
        //  sx={{ backgroundColor: 'lavender', borderRadius: 1 }}
      />
    </div>
  </div>
);

export default InputField;