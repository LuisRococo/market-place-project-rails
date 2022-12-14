import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <Link className="navbar-brand goog" to="/">
        O-Sale
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="new-item.html">
              New Product
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="login.html">
              Sign In
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="register.html">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
