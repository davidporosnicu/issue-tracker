import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, size, onClick }) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
};

export default Button;
