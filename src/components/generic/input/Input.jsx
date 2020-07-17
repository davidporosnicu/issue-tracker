import React from "react";
import styles from "./Input.module.css";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className={styles.input}
      onChange={onChange}
      type={type}
      value={value}
      placeholder={placeholder}
    />
  );
};
export default Input;
