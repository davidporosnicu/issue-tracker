import React from "react";
import styles from "./Cards.module.css";

import { Droppable } from "react-beautiful-dnd";

import AddCard from "../add-card/AddCard";
import Card from "../card/Card";

const Cards = ({ listId, cardIds }) => {
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
              <Card key={cardId} cardId={cardId} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Cards;
