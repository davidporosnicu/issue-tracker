import React, { useState } from "react";
import styles from "./AddList.module.css";
import { connect } from "react-redux";
import { createList } from "../../redux/list/lists.actions";

import Input from "../generic/input/Input";
import Button from "../generic/button/Button";

const AddList = ({ createList, userId }) => {
  const [title, setTitle] = useState("");

  const onChange = e => {
    setTitle(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    createList(title, userId);
    setTitle("");
  };

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <Input
        className={styles.input}
        type="text"
        value={title}
        onChange={onChange}
        placeholder="New List Title"
      />
      <div className={styles.button}>
        <Button text="Create New List" />
      </div>
    </form>
  );
};

const mapDispatchToProps = {
  createList,
};

export default connect(null, mapDispatchToProps)(AddList);
