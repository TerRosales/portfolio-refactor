import React from "react";
import images from "../../assets/images";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="app__nav">
      <div className="app__nav-logo">
        <Link to="/home">
          <img src={images.logo} alt="logo" />
        </Link>
      </div>
      <section className="app__nav-link_list">
        <ul className="app__nav-link_list">
          <li className="app__nav-link_listItem">
            <a href="#about">About</a>
          </li>
          <li className="app__nav-link_listItem">
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <NavLink className="app__nav-link_listItem" to="/form">
          Form
        </NavLink>
      </section>
    </nav>
  );
};

export default Navbar;
