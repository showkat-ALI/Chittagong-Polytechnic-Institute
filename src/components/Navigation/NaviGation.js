import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NaviGation.css";
// navigation builder

const NaviGation = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "cyan",
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Ctgpoly</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-item" activeStyle={activeStyle} to="/home">
              Home
            </NavLink>
            <NavLink
              className="nav-item"
              activeStyle={activeStyle}
              to="/departments"
            >
              Departments
            </NavLink>
            <NavLink className="nav-item" activeStyle={activeStyle} to="/about">
              About
            </NavLink>
            <NavLink
              className="nav-item"
              activeStyle={activeStyle}
              to="/coCuriculam"
            >
              Co-Curriculams{" "}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NaviGation;
