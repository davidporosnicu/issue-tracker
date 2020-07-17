import React from "react";
import styles from "./Lists.module.css";
import { connect } from "react-redux";
import { updateCardPosition } from "../../redux/card/cards.actions";
import { DragDropContext } from "react-beautiful-dnd";

import AddList from "../add-list/AddList";
import List from "../list/List";

const Lists = ({ lists, updateCardPosition }) => {
  const { entries, ids } = lists;

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const start = lists.entries[source.droppableId];
    const finish = lists.entries[destination.droppableId];

    if (start === finish) {
      const updatedCardIds = start.cardIds;
      updatedCardIds.splice(source.index, 1);
      updatedCardIds.splice(destination.index, 0, draggableId);
      updateCardPosition(updatedCardIds, start.id);
    }

    const startCardIds = start.cardIds;
    startCardIds.splice(source.index, 1);
    updateCardPosition(startCardIds, start.id);

    const finishCardIds = finish.cardIds;
    finishCardIds.splice(destination.index, 0, draggableId);
    updateCardPosition(finishCardIds, finish.id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <AddList />
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={styles.lists}>
          {ids.map(listId => {
            return <List key={listId} data={entries[listId]} />;
          })}
        </div>
      </DragDropContext>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    lists: state.lists,
  };
};

const mapDispatchToProps = {
  updateCardPosition,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
