import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    
  const active = { color: "#F15B2A" };

  return (
    <nav>
      <NavLink to="/" exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/register">Register</NavLink>
      {" | "}
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}

export default Header;
