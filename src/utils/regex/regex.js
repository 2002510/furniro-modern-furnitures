// src/utils/regex/regex.js
const regex = {
  username: /^[a-zA-Z0-9]+$/,
  password: /^(?=.*[A-Za-z])(?=.*\d).+$/,
};

export default regex;