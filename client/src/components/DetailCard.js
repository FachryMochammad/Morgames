import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./";

const DetailCard = ({ game }) => {
  if (game.minimum_system_requirements) {
    return (
      <>
        <Navbar />
        <div className="container" style={{ color: "white" }}>
          <h1 className="game-title detail">{game.title}</h1>
          <span className="game-genre">{game.genre}</span>
          <Link to="/">
            <button className="back-btn">Back</button>
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "20px",
            }}
          >
            <div>
              <img
                src={game.thumbnail}
                alt=" game.name"
                style={{ marginBottom: "1rem" }}
              />
              <span className="game-desc detail">
                <a href={game.game_url} target="blank" className="link-website">
                  Visit {game.title} Website!
                </a>
              </span>
              <p style={{ marginTop: "20px" }} className="detail-info">
                Minimum System Requirements:
              </p>
              <span className="game-desc detail">
                OS: {game.minimum_system_requirements.os}
              </span>
              <span className="game-desc detail">
                Processor: {game.minimum_system_requirements.processor}
              </span>
              <span className="game-desc detail">
                Memory: {game.minimum_system_requirements.memory}
              </span>
              <span className="game-desc detail">
                Graphic: {game.minimum_system_requirements.graphic}
              </span>
              <span className="game-desc detail">
                Storage: {game.minimum_system_requirements.storage}
              </span>
            </div>
            <div style={{ marginLeft: "30px" }}>
              <p className="detail-info">Description:</p>
              <p className="game-desc detail" style={{ textAlign: "justify" }}>
                {game.description}
              </p>
              <p className="detail-info">Developer:</p>
              <p>{game.developer}</p>
              <p className="detail-info">Publisher:</p>
              <p>{game.publisher}</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container" style={{ color: "white" }}>
        <h1 className="game-title detail">{game.title}</h1>
        <span className="game-genre">{game.genre}</span>
        <Link to="/">
          <button className="back-btn">Back</button>
        </Link>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
          }}
        >
          <div>
            <img
              src={game.thumbnail}
              alt=" game.name"
              style={{ marginBottom: "1rem" }}
            />
            <span className="game-desc detail">
              <a href={game.game_url} target="blank" className="link-website">
                Visit {game.title} Website!
              </a>
            </span>
            <p style={{ marginTop: "20px" }} className="detail-info">
              Minimum System Requirements:
            </p>
            <span className="game-desc detail">Not defined</span>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <p className="detail-info">Description:</p>
            <p className="game-desc detail" style={{ textAlign: "justify" }}>
              {game.description}
            </p>
            <p className="detail-info">Developer:</p>
            <p>{game.developer}</p>
            <p className="detail-info">Publisher:</p>
            <p>{game.publisher}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
