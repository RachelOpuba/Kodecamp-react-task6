import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">MamaPut</div>
        <div className="NavLinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="tele">(+234) 107-805-444</div>
      </nav>
    </>
  );
};

export default Navbar;
