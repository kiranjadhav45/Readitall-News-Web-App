import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
// import Navbar from "./Navbar.css";
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg  fixed-top"
          id="navbar"
          style={{ background: "rgba(227, 240, 250, 255)" }}
        >
          <div className="container-fluid">
            <Link className="navbar-brand text-white" to="#"></Link>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon bg-light rounded"></span>
            </button> */}
            <img src={logo} className="img-fluid" width="118" height="70"></img>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0  mx-5">
                <li className="nav-item ms-4">
                  <Link className="nav-link text-black " to="/general">
                    <b>General</b>
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link
                    className="nav-link text-black active "
                    aria-current="page"
                    to="/business"
                  >
                    <b> Business</b>
                  </Link>
                </li>

                <li className="nav-item ms-4">
                  <Link className="nav-link text-black " to="/entertainment">
                    <b>Entertainment</b>
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link text-black" to="/health">
                    <b> Health</b>
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link text-black " to="science">
                    <b> Science</b>
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link text-black" to="/sports">
                    <b> Sports</b>
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link text-black " to="/technology">
                    <b> Technology</b>{" "}
                  </Link>
                </li>
              </ul>
              {/* <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

// businessentertainmentgeneralhealthsciencesportstechnology. Note: you can't mix this param with the sources
