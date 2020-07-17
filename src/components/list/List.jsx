import React from "react";
import styles from "./List.module.css";
import Cards from "../cards/Cards";

import Button from "../generic/button/Button";

const List = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>{data.title}</h3>
      </div>
      <div className={styles.cards}>
        <Cards listData={data} />
      </div>
    </div>
  );
};

export default List;
