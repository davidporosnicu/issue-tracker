import React, { useState } from "react";
import styles from "./AddCard.module.css";

import { connect } from "react-redux";
import { createCard } from "../../redux/card/cards.actions";

import Input from "../generic/input/Input";
import Button from "../generic/button/Button";

const AddCard = ({ createCard, listId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    setTitle("");
    setDescription("");
    createCard({ title, description }, listId);
  };

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <div className={styles.inputWrapper}>
        <Input
          onChange={e => setTitle(e.target.value)}
          type="text"
          name="title"
          value={title}
          placeholder="Title"
        />
      </div>
      <div className={styles.inputWrapper}>
        <Input
          onChange={e => setDescription(e.target.value)}
          type="text"
          name="description"
          value={description}
          placeholder="Description"
        />
      </div>
      <Button text={"Create New Card"} />
    </form>
  );
};

const mapDispatchToProps = {
  createCard,
};

export default connect(null, mapDispatchToProps)(AddCard);
