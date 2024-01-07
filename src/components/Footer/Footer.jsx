import React from "react";
import "./Footer.css";
import { FaGithubAlt, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="app__footer">
      <section className="app__footer-link_lists">
        <ul className="app__footer-list">
          <label htmlFor="">Socials</label>
          <li className="app__footer-list-item">
            <FaGithubAlt />
          </li>
          <li className="app__footer-list-item">
            <FaLinkedin />
          </li>
          <li className="app__footer-list-item">
            <FaTwitterSquare />
          </li>
        </ul>
        <ul className="app__footer-list">
          <label htmlFor="">Reads</label>
          <li className="app__footer-list-item"></li>
          <li className="app__footer-list-item"></li>
          <li className="app__footer-list-item"></li>
        </ul>
        <ul className="app__footer-list">
          <label htmlFor="">Mentors</label>
          <li className="app__footer-list-item"></li>
          <li className="app__footer-list-item"></li>
          <li className="app__footer-list-item"></li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
