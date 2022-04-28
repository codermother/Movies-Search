import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="header d-flex align-items-center justify-content-between">
      <Link to="/" className="text-decoration-none">
        <h1 className="logo">Movies</h1>
      </Link>
    </div>
  );
}

export default Header;
