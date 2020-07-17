import { combineReducers } from "redux";

import lists from "./list/lists.reducer";
import cards from "./card/cards.reducer";
import users from "./user/users.reducer";

const rootReducer = combineReducers({
  lists,
  cards,
  users,
});

export default rootReducer;
