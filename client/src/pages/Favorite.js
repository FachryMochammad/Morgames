import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";
import { useSelector } from "react-redux";
import { FavoriteCard } from "../components";

const Favorite = () => {
  const favorites = useSelector((state) => state.favorites.data);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1
          className="text-center"
          style={{ color: "#9147ff", fontWeight: 700, marginTop: "1rem" }}
        >
          My Favorites
        </h1>
        <Link to="/">
          <button className="back-btn" style={{ marginLeft: "10rem" }}>
            Back
          </button>
        </Link>
        <div className="row" style={{ marginTop: "-40px" }}>
          {favorites.map((favorite) => (
            <FavoriteCard favorite={favorite} key={favorite.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorite;
