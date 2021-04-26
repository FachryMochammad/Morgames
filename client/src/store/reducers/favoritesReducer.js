const initialState = {
  data: [],
};

const favoritesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "favorites/addToFavorites":
      return { ...state, data: state.data.concat(payload) };
    default:
      break;
  }
  return state;
};

export default favoritesReducer;
