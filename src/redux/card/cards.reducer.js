const cardReducer = (
  state = {
    entries: {},
    ids: [],
  },
  action
) => {
  const { type, payload } = action;

  if (type === "ADD_CARD") {
    return {
      ...state,
      entries: {
        ...state.entries,
        [payload.card.id]: payload.card,
      },
      ids: [...state.ids, payload.card.id],
    };
  }

  if (type === "UPDATE_CARD_LIST") {
    return {
      ...state,
      ids: payload.cardIds,
    };
  }

  if (type === "ASSIGN_USER") {
    return {
      ...state,
      entries: {
        ...state.entries,
        [payload.cardId]: {
          ...state.entries[payload.cardId],
          assignedTo: payload.userId,
        },
      },
    };
  }

  return state;
};

export default cardReducer;
