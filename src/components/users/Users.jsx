import React from "react";
import styles from "./Users.module.css";
import { connect } from "react-redux";
import AddUser from "../add-user/AddUser";
import User from "../user/User";

const Users = ({ users }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Users</h2>
      <AddUser />
      <div className={styles.hrLine} />

      {users.ids.map(id => {
        return (
          <User
            key={id}
            isSelected={users.selectedUser === id}
            user={users.entries[id]}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(Users);
