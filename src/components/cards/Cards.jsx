import React from "react";
import styles from "./Cards.module.css";
import { connect } from "react-redux";

import { Droppable } from "react-beautiful-dnd";

import AddCard from "../add-card/AddCard";
import Card from "../card/Card";

const Cards = props => {
  const { id: listId, cardIds } = props.listData;
  const { cards } = props;

  return (
    <div className={styles.container}>
      <AddCard listId={listId} />

      <Droppable droppableId={listId}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={styles.cards}
          >
            {cardIds.map((cardId, index) => (
              <Card key={cardId} card={cards.entries[cardId]} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

const mapStateToProps = state => {
  return { cards: state.cards };
};

export default connect(mapStateToProps)(Cards);
