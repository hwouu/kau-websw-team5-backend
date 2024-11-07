// src/components/layout/Header.js
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-400">
          Traffic Incident Analysis
        </Link>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-green-400">
            Home
          </Link>
          <Link to="/login" className="hover:text-green-400">
            Login
          </Link>
          <Link to="/user-dashboard" className="hover:text-green-400">
            User Dashboard
          </Link>
          <Link to="/admin-dashboard" className="hover:text-green-400">
            Admin Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
