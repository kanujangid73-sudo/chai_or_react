import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold text-blue-400">RouterApp</h1>
      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-blue-400 font-medium ${isActive ? "text-blue-400 border-b-2 border-blue-400" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-blue-400 font-medium ${isActive ? "text-blue-400 border-b-2 border-blue-400" : ""}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `hover:text-blue-400 font-medium ${isActive ? "text-blue-400 border-b-2 border-blue-400" : ""}`
          }
        >
          Users
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;