// src/components/layout/Header.js
import React from "react";

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Traffic Incident Analysis</h1>
        <nav>
          <a href="/" className="px-4 py-2 hover:underline">
            Home
          </a>
          <a href="/login" className="px-4 py-2 hover:underline">
            Login
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
