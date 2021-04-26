import React from "react";
import morgyFix from "../assets/images/morgyFix.png";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const toHome = (event) => {
    event.preventDefault();
    history.push("/");
  };

  return (
    <header style={{ display: "flex" }} className="shadow">
      <div className="logo" onClick={(event) => toHome(event)}>
        <img src={morgyFix} alt="Logo" className="logo" />
        <h4 className="logo-name">orgames</h4>
      </div>
      <div className="nav-button">
        <Link to="/favorite">
          <button className="to-favorite-btn">My Favorites</button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
