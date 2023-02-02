import React from "react";
import { NavLink } from "react-router-dom";
import { FcHome } from "react-icons/fc";

function Navbar() {
  return (
    <div className="Navbar_container">
      <NavLink to="/Home">
        <FcHome className="Navbar_container_icon" />
      </NavLink>
    </div>
  );
}

export default Navbar;
