import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Navigation extends Component {
  logout = event => {
    event.preventDefault();
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("beeZUser");
    console.log("not working yet");
  };

  render() {
    return (
      <Navbar
        brand="Bee-Z Street"
        right
        className={
          window.location.pathname === "/login" ||
          window.location.pathname === "/register"
            ? "hide"
            : "#f9a825 yellow darken-3"
        }
      >
        <NavItem
          href="/"
          className={
            window.location.pathname === "/"
              ? "nav-item active"
              : "nav-item navbar"
          }
        >
          Search
        </NavItem>
        <NavItem
          href="/garden"
          className={
            window.location.pathname === "/garden"
              ? "nav-item active"
              : "nav-item navbar"
          }
        >
          Garden
        </NavItem>
        <NavItem
          href="/contact"
          className={
            window.location.pathname === "/contact"
              ? "nav-item active"
              : "nav-item navbar"
          }
        >
          Contact
        </NavItem>
        <NavItem href="/" className="nav-item navbar" onClick={this.logout}>
          Log Out
        </NavItem>
      </Navbar>
    );
  }
}
export default Navigation;
