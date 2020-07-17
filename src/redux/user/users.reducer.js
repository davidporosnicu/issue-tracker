import { ADD_USER, SELECT_USER, REMOVE_USER } from "./users.types";

const INITIAL_STATE = {
  entries: {},
  ids: [],
  selectedUser: "",
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
      selectedUser: payload.user.id,
    };
  }

  if (type === SELECT_USER) {
    return { ...state, selectedUser: payload.userId };
  }

  if (type === REMOVE_USER) {
    delete state.entries[payload.userId];
    const ids = state.ids.filter(id => id !== payload.userId);
    let selectedUser = state.selectedUser;

    if (selectedUser === payload.userId && ids.length > 0) {
      selectedUser = ids[0];
    } else {
      selectedUser = "";
    }
    return { ...state, selectedUser, ids };
  }

  if (type === "ADD_LIST") {
    return {
      ...state,
      entries: {
        ...state.entries,
        [payload.userId]: {
          ...state.entries[payload.userId],
          listIds: [...state.entries[payload.userId].listIds, payload.listId],
        },
      },
    };
  }
  return state;
};

export default listsReducer;
