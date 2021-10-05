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
              <i class="fas fa-home"></i>
              Home
            </NavLink>
            <NavLink
              className="nav-item"
              activeStyle={activeStyle}
              to="/departments"
            >
              <i class="fas fa-book-open"></i>
              Departments
            </NavLink>
            <NavLink className="nav-item" activeStyle={activeStyle} to="/about">
              <i class="fas fa-university"></i>
              About
            </NavLink>
            <NavLink
              className="nav-item"
              activeStyle={activeStyle}
              to="/coCuriculam"
            >
              <i class="fas fa-praying-hands"></i>
              Co-Curriculams{" "}
            </NavLink>
            <NavLink
              className="nav-item"
              activeStyle={activeStyle}
              to="/contactus"
            >
              <i class="fas fa-file-contract"></i>
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NaviGation;
