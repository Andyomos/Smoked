import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="navContainer">
        <div className="navInner">
          <h1>
            <span>SMOKED</span>{" "}
            <small>
              ~ Fish <span>&</span> Turkey
            </small>
          </h1>

          <nav className="mainNav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <NavLink to="/about" activeClassName="main-nav-active">
                  About
                </NavLink>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;
