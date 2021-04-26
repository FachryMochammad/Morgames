import React from "react";
import { useHistory } from "react-router-dom";
import { addToFavorites } from "../store/actions/favorites";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const GameCard = ({ game }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.data);
  const toGameDetail = (event, id) => {
    event.preventDefault();
    history.push(`/games/${id}`);
  };
  const addToFavorite = ({ title, genre, id, thumbnail }) => {
    const isFound = favorites.find((favorite) => favorite.title === title);
    if (!isFound) {
      toast.success(`Added ${title} to your favorite games!`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch(addToFavorites({ title, genre, id, thumbnail }));
    } else {
      toast.error(`${title} is already in your favorite games!`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="col-md-4 col-sm-1 col-lg-3 mt-3">
      <div className="card" style={{ border: "none" }}>
        <span className="circle">
          <i
            className="bi bi-star-fill favorite-icon"
            onClick={() => {
              const title = game.title;
              const genre = game.genre;
              const id = game.id;
              const thumbnail = game.thumbnail;
              addToFavorite({ title, genre, id, thumbnail });
            }}
          ></i>
        </span>
        <img
          src={game.thumbnail}
          className="card-image"
          alt={game.title}
          onClick={(event) => {
            const id = game.id;
            toGameDetail(event, id);
          }}
        />
        <div className="card-body">
          <p
            className="game-title"
            onClick={(event) => {
              const id = game.id;
              toGameDetail(event, id);
            }}
          >
            {game.title}
          </p>
          <span className="game-genre">{game.genre}</span>
          <hr style={{ borderColor: "#772ce8" }} />
          <span className="game-desc">{game.short_description}</span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
