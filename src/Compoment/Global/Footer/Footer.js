import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../../asset/logo.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <Container className="footer">
      <div className="menu d-flex align-items-center">
        <img src={logo} alt="" />
        <ul className="menu-footer d-flex align-items-center">
          <li>
            <a aria-current="page" className="active" href="/">
              HOME
            </a>
          </li>
          <li>
            <a id="movie" className="" href="/list-movie">
              MOVIES
            </a>
          </li>
        </ul>
      </div>
      <div className="body-footer d-flex align-items-center">
        <p className="coder mb-0">
          © 2023 <span className="coder-color">Filmlane</span>.All Rights Reserved
          by <span className="coder-color">Xuan Phuc</span>
        </p>
      </div>
    </Container>
  );
};

export default Footer;
