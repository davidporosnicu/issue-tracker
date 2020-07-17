const ADD_CARD = "ADD_CARD";

export const createCard = (card, listId) => {
  const cardId = Date.now().toString();

  return { type: ADD_CARD, payload: { card: { id: cardId, ...card }, listId } };
};
