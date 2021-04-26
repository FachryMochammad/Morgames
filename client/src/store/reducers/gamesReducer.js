const initialState = {
  data: [],
  loading: false,
  error: null,
};

const gamesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "games/setGames":
      return { ...state, data: payload };
    case "games/setLoading":
      return { ...state, loading: payload };
    case "games/setError":
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default gamesReducer;
