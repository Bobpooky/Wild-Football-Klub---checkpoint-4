import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home_page">
      <div className="home_page_logo_container">
        <img className="wild" src="/src/assets/wild_logo.png" alt="logo" />
        <h1 className="text"> Football Klub</h1>
      </div>

      <div className="home_content_container">
        <div className="home_content_container_left">
          <NavLink to="/ManageTeams">
            <button className="home_buttons" type="button">
              Manage your teams!
            </button>
          </NavLink>
          <NavLink to="/ManageClub">
            <button className="home_buttons" type="button">
              Manage your Club
            </button>
          </NavLink>
          <NavLink to="/Match">
            <button className="home_buttons" type="button">
              Start a Match!
            </button>
          </NavLink>
        </div>

        <div className="home_content_container_right">
          <img
            className="home_content_container_stadium"
            src="/src/assets/Wild_stadium.png"
            alt="stadium"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
