import React, { useEffect } from "react";
import { Loading, Error, DetailCard } from "../components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setGamesAsync } from "../store/actions/games";

const GameDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.data);
  const loading = useSelector((state) => state.games.loading);
  const error = useSelector((state) => state.games.error);

  useEffect(() => {
    dispatch(
      setGamesAsync(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`
      )
    );
  }, [id, dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <DetailCard game={game} />
    </>
  );
};

export default GameDetail;
