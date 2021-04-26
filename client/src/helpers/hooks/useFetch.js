import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setGames } from "../../store/actions/games";

const useFetch = (fetchUrl) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [url] = useState(fetchUrl);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
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
      .catch((err) => setError(err))
      .finally((_) => setLoading(false));
  }, [url, dispatch]);

  return {
    loading,
    error,
  };
};

export default useFetch;
