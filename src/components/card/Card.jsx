import React from "react";
import styles from "./Card.module.css";

const Card = ({ card }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{card.title}</h3>
      <p className={styles.description}>{card.description}</p>
    </div>
  );
};

export default Card;
