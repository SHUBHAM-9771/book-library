import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../style/Nav.css";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="logo">
          <p>Logo</p>
        </div>

        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            CREATE BOOKS
          </NavLink>

          <NavLink
            to="/all-books"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            ALL BOOKS
          </NavLink>

          <NavLink
            to="/single-books"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            SINGLE BOOKS
          </NavLink>
        </div>
      </nav>

      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
