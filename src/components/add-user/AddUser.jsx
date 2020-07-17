import React, { useState } from "react";
import styles from "./AddUser.module.css";
import { connect } from "react-redux";
import { createUser } from "../../redux/user/users.actions";

import Input from "../generic/input/Input";
import Button from "../generic/button/Button";

const AddList = ({ createUser }) => {
  const [name, setName] = useState("");

  const onChange = e => {
    setName(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    createUser({ name });
    setName("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.inputWrapper}>
        <Input
          type="text"
          value={name}
          onChange={onChange}
          placeholder="New User Name"
        />
      </div>

      <Button text="Create New User" />
    </form>
  );
};

const mapDispatchToProps = {
  createUser,
};

export default connect(null, mapDispatchToProps)(AddList);
