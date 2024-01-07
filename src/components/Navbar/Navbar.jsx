import React from "react";
import images from "../../assets/images";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="app__nav">
      <div className="app__nav-logo">
        <Link to="/">
          <img src={images.logo} alt="logo" />
        </Link>
      </div>
      <section className="app__nav-link_list">
        <NavLink className="app__nav-link_listItem" to="/#about">
          About
        </NavLink>
        <NavLink className="app__nav-link_listItem" to="/#projects">
          Projects
        </NavLink>
        <NavLink className="app__nav-link_listItem" to="/Form">
          Form
        </NavLink>
      </section>
    </nav>
  );
};

export default Navbar;
