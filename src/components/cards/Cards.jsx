import React from "react";
import styles from "./Cards.module.css";
import { connect } from "react-redux";

import AddCard from "../add-card/AddCard";
import Card from "../card/Card";

const Cards = props => {
  const { id: listId, cardIds } = props.listData;
  const { cards } = props;

  return (
    <div className={styles.container}>
      <AddCard listId={listId} />
      <div className={styles.cards}>
        {cardIds.map(cardId => (
          <Card key={cardId} cardId={cardId} card={cards.entries[cardId]} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { cards: state.cards };
};

export default connect(mapStateToProps)(Cards);
