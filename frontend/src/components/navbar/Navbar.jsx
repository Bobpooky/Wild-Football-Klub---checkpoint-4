import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar_container">
      <NavLink to="/Home" />
    </div>
  );
}

export default Navbar;
