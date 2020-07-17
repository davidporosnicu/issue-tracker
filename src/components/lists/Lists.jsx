import React from "react";
import styles from "./Lists.module.css";
import { connect } from "react-redux";

import AddList from "../add-list/AddList";
import List from "../list/List";

const Lists = ({ lists }) => {
  const { entries, ids } = lists;

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <AddList />
      </div>
      <div className={styles.lists}>
        {ids.map(listId => {
          return <List key={listId} data={entries[listId]} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    lists: state.lists,
  };
};

export default connect(mapStateToProps)(Lists);
