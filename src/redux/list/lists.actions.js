import ListsActionTypes from "./lists.types";

export const createList = (title, userId) => {
  const listId = Date.now().toString();

  return {
    type: ListsActionTypes.ADD_LIST,
    payload: {
      list: { id: listId, title, cardIds: [], assignedTo: userId },
      listId,
      userId,
    },
  };
};
