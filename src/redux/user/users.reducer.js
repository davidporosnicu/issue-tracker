import { ADD_USER, REMOVE_USER } from "./users.types";

const INITIAL_STATE = {
  entries: {},
  ids: [],
};

const listsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  if (type === ADD_USER) {
    const entries = {
      ...state.entries,
      [payload.user.id]: payload.user,
    };

    return {
      ...state,
      entries: { ...entries },
      ids: [payload.user.id, ...state.ids],
    };
  }

  if (type === REMOVE_USER) {
    delete state.entries[payload.userId];
    const ids = state.ids.filter(id => id !== payload.userId);

    return { ...state, ids };
  }

  return state;
};

export default listsReducer;
