import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../../asset/logo.svg";
import { Container, Nav, Navbar, Form, InputGroup } from "react-bootstrap/";

const Header = () => {
  const handleInputSearch = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      window.location.href = `/search/${e.target.value}`;
    }
  };
  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img src={logo} alt="" />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/list-movie">Movies</Link>
          </Nav>
          <InputGroup>
            <Form.Control
              onKeyDown={handleInputSearch}
              placeholder="Search For A Movie"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">
              <i className="fa-solid fa-magnifying-glass"></i>
            </InputGroup.Text>
          </InputGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
