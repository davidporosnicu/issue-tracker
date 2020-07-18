import React from "react";
import styles from "./List.module.css";
import { connect } from "react-redux";

import Cards from "../cards/Cards";

const List = ({ list }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>{list.title}</h3>
      </div>
      <div className={styles.cards}>
        <Cards listId={list.id} cardIds={list.cardIds} />
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.lists.entries[ownProps.listId],
  };
};

export default connect(mapStateToProps)(List);
