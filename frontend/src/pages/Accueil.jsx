import React from "react";
import { NavLink } from "react-router-dom";

function Accueil() {
  return (
    <div className="accueil_page">
      <div className="accueil_page_logo_container">
        <img className="wild" src="/src/assets/wild_logo.png" alt="logo" />
        <h1 className="text"> Football Klub</h1>
      </div>
      <img
        className="accueil_page_stadium"
        src="/src/assets/Wild_stadium.png"
        alt="stadium"
      />
      <NavLink to="/Home">
        <button className="accueil_page_button" type="button">
          Enter
        </button>
      </NavLink>
    </div>
  );
}

export default Accueil;
