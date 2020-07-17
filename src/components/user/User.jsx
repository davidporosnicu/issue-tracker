import React from "react";
import styles from "./User.module.css";
import { connect } from "react-redux";
import { selectUser, removeUser } from "../../redux/user/users.actions";

import Button from "../generic/button/Button";

const List = ({ user, isSelected, selectUser, removeUser }) => {
  return (
    <div className={`${isSelected ? styles.active : ""} ${styles.user}`}>
      <h3 className={styles.name}>{user.name}</h3>
      <p className={styles.description}>Lorem ipsum dolor sit amet</p>
      {!isSelected && (
        <Button onClick={() => selectUser(user.id)} text="Select User" />
      )}
      <br />
      <Button onClick={() => removeUser(user.id)} text="Remove User" />
    </div>
  );
};

const mapDispatchToProps = {
  selectUser,
  removeUser,
};

export default connect(null, mapDispatchToProps)(List);
