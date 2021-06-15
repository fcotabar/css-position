import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            exact
            to="/grid"
            className="nav__link"
            activeClassName="nav__link--selected"
          >
            Grid
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            exact
            to="/grid-basic"
            className="nav__link"
            activeClassName="nav__link--selected"
          >
            Grid Basic
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            exact
            to="/grid-template-area"
            className="nav__link"
            activeClassName="nav__link--selected"
          >
            Grid Template
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
