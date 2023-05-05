import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import logo from "../../assets/logo.png";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <div className="navbar bg-base-100 lg:px-24 py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/blog">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/recipe">
                  Chef
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="normal-case text-xl">
            <img className="h-16 w-full" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/blog">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/chef">
                Chef
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div
                className="dropdown dropdown-end tooltip tooltip-left"
                data-tip={user.displayName}>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full tooltip">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <p className="justify-between">{user.displayName}</p>
                  </li>
                  <li>
                    <p>{user.email}</p>
                  </li>
                  <li>
                    <a onClick={handleLogOut}>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
