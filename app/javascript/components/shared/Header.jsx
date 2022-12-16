import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

function Header({ currentUser }) {
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
            <Link className="nav-link" to="/">
              New Product
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Sign Up
            </Link>
          </li>

          {currentUser ? (
            <li className="nav-item mt-1">
              <p className="navbar-text">Signed in as {currentUser.email}</p>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  );
}

Header.propTypes = {
  currentUser: PropTypes.object,
};

export default Header;
