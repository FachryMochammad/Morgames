export const setGames = (payload) => {
  return { type: "games/setGames", payload };
};

export const setLoading = (payload) => {
  return { type: "games/setLoading", payload };
};

export const setError = (payload) => {
  return { type: "games/setError", payload };
};

export const setGamesAsync = (url) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status_message) throw data.status_message;
        if (data.length > 50) {
          dispatch(setGames(data.slice(0, 48)));
        } else {
          dispatch(setGames(data));
        }
      })
      .catch((err) => dispatch(setError(err)))
      .finally((_) => dispatch(setLoading(false)));
  };
};
