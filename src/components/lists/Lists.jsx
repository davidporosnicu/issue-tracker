import React from "react";
import styles from "./Lists.module.css";
import { connect } from "react-redux";

import AddList from "../add-list/AddList";
import List from "../list/List";

const Lists = ({ lists, selectedUser, users }) => {
  const { entries, ids } = lists;

  if (!selectedUser) return "";

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <AddList userId={selectedUser} />
      </div>
      <div className={styles.lists}>
        {users[selectedUser].listIds.map(listId => {
          return <List key={listId} data={entries[listId]} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    lists: state.lists,
    users: state.users.entries,
    selectedUser: state.users.selectedUser,
  };
};

export default connect(mapStateToProps)(Lists);
