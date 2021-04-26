import favoritesReducer from "./favoritesReducer";
import gamesReducer from "./gamesReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  games: gamesReducer,
  favorites: favoritesReducer,
});

export default reducer;
