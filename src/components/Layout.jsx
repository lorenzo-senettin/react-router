import React from "react";
import { NavLink } from "react-router-dom";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/chi-siamo"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Chi Siamo
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Posts
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
