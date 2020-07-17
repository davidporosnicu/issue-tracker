const cardReducer = (
  state = {
    entries: {},
    ids: [],
  },
  action
) => {
  if (action.type === "ADD_CARD") {
    console.log(action.payload);
    return {
      ...state,
      entries: {
        ...state.entries,
        [action.payload.card.id]: action.payload.card,
      },
      ids: [...state.ids, action.payload.card.id],
    };
  }

  return state;
};

export default cardReducer;
