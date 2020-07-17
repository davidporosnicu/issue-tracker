const ADD_CARD = "ADD_CARD";
const UPDATE_CARD_LIST = "UPDATE_CARD_LIST";

export const createCard = (card, listId) => {
  const cardId = Date.now().toString();

  return { type: ADD_CARD, payload: { card: { id: cardId, ...card }, listId } };
};

export const updateCardPosition = (cardIds, listId) => {
  return { type: UPDATE_CARD_LIST, payload: { cardIds, listId } };
};
