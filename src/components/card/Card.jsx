import React from "react";
import styles from "./Card.module.css";
import { Draggable } from "react-beautiful-dnd";

const Card = ({ card, index }) => {
  return (
    <Draggable draggableId={card.id} index={index}>
      {provided => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={styles.container}
        >
          <h3 className={styles.title}>{card.title}</h3>
          <p className={styles.description}>{card.description}</p>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
