// src/utils/validationSchema.js
import * as yup from 'yup';
import regex from './regex/regex';
import { validationMessages } from '../constants/validationMessages';

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .matches(regex.username, validationMessages.username)
    .required('Username is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .matches(regex.password, 'Password must contain at least one letter and one number')
    .required('Password is required'),
});