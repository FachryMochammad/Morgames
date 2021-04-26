import React from "react";
import { useHistory } from "react-router-dom";

const GameCard = ({ favorite }) => {
  const history = useHistory();
  const toGameDetail = (event, id) => {
    event.preventDefault();
    history.push(`/games/${id}`);
  };

  return (
    <div className="col-md-4 col-sm-1 col-lg-3 mt-3">
      <div className="card" style={{ border: "none" }}>
        <img
          src={favorite.thumbnail}
          className="card-image"
          alt={favorite.title}
          onClick={(event) => {
            const id = favorite.id;
            toGameDetail(event, id);
          }}
        />
        <div className="card-body">
          <p
            className="game-title"
            onClick={(event) => {
              const id = favorite.id;
              toGameDetail(event, id);
            }}
          >
            {favorite.title}
          </p>
          <span className="game-genre">{favorite.genre}</span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
