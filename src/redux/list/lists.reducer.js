const INITIAL_STATE = {
  entries: {},
  ids: [],
};

const listsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  if (type === "ADD_LIST") {
    return {
      ...state,
      entries: {
        ...state.entries,
        [payload.listId]: payload.list,
      },
      ids: [...state.ids, payload.listId],
    };
  }
  if (type === "ADD_CARD") {
    return {
      ...state,
      entries: {
        ...state.entries,
        [payload.listId]: {
          ...state.entries[payload.listId],
          cardIds: [...state.entries[payload.listId].cardIds, payload.card.id],
        },
      },
    };
  }

  if (type === "UPDATE_CARD_LIST") {
    return {
      ...state,
      entries: {
        ...state.entries,
        [payload.listId]: {
          ...state.entries[payload.listId],
          cardIds: payload.cardIds,
        },
      },
    };
  }

  return state;
};

export default listsReducer;
