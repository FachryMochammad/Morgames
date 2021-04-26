import React, { useEffect } from "react";
import { Navbar, GameCard, Loading, Error } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setGamesAsync } from "../store/actions/games";

const Home = () => {
  const dispatch = useDispatch();
  const {data: games, loading, error} = useSelector((state) => state.games);


  useEffect(() => {
    dispatch(
      setGamesAsync(
        "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity"
      )
    );
  }, [dispatch]);

  if (loading || !games.length) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row mt-2">
          {games.map((game) => (
            <GameCard game={game} key={game.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
