import React from "react";
import styles from "./Card.module.css";
import { Draggable } from "react-beautiful-dnd";
import Select from "../select/SelectContainer";

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
          <br />
          <p>
            {card.assignedTo
              ? `Assigned to ${card.assignedTo}`
              : "Not Assigned Yet"}
          </p>
          <br />
          <Select card={card} />
        </div>
      )}
    </Draggable>
  );
};

export default Card;
