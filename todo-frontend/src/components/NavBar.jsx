import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./context/AuthContext.jsx";

function NavBar({ darkMode, toggleDarkMode }) {
  let { user, loginUser } = useContext(AuthContext);

  return (
    <nav className="bg-gray-100 shadow-md dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl font-semibold text-gray-800 dark:text-gray-200"
            >
              TodoApp
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/"
              className="mx-3 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
            >
              Home
            </Link>
            <Link
              to="/priorities"
              className="mx-3 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
            >
              Priority Todos
            </Link>
            <Link
              to="/new"
              className="mx-3 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
            >
              New Todo
            </Link>
            <button
              onClick={toggleDarkMode}
              className="ml-4 rounded-full bg-gray-200 p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              {darkMode ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
            <div>
              {user ? (
                <Link to="/logout">Logout</Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
