import { ADD_USER, REMOVE_USER } from "./users.types";

export const createUser = userData => {
  const userId = Date.now().toString();

  return {
    type: ADD_USER,
    payload: {
      user: {
        id: parseInt(userId),
        name: userData.name,
      },
    },
  };
};

export const removeUser = userId => {
  return {
    type: REMOVE_USER,
    payload: { userId },
  };
};
