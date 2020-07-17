import React from "react";
import styles from "./User.module.css";
import { connect } from "react-redux";
import { removeUser } from "../../redux/user/users.actions";

import Button from "../generic/button/Button";

const List = ({ user, removeUser }) => {
  return (
    <div className={styles.user}>
      <h3 className={styles.name}>{user.name}</h3>
      <p className={styles.description}>Lorem ipsum dolor sit amet</p>
      <br />
      <Button onClick={() => removeUser(user.id)} text="Remove User" />
    </div>
  );
};

const mapDispatchToProps = {
  removeUser,
};

export default connect(null, mapDispatchToProps)(List);
