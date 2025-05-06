import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { getUser } from "../../services/auth";

const NavBar = () => {
  const { roles = [], loggedIn, handleLogout } = useContext(AuthContext); // Add fallback for roles
  const user = getUser();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand ms-4" to="/">
        ALD
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>
          {roles.includes("admin") && (
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/admin"
              >
                Admin
              </NavLink>
            </li>
          )}
          {roles.includes("user") && (
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/user"
              >
                User
              </NavLink>
            </li>
          )}
          {roles.includes("manager") && (
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/manager"
              >
                Manager
              </NavLink>
            </li>
          )}
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          {loggedIn ? (
            <li className="nav-item">
              <button className="nav-link btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
