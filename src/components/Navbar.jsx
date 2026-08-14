import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <p>Logo</p>
        </div>
        <div>
          <NavLink to="/">CREATE BOOKS</NavLink>
          <NavLink to="/all-books">ALL BOOKS</NavLink>
          <NavLink to="/single-books">SINGLE BOOKS</NavLink>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Navbar;
