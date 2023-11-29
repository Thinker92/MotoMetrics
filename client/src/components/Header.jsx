import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="header"
      style={{ padding: "20px", textAlign: "center", backgroundColor: "#eee" }}
    >
      <h1 style={{ margin: "0" }}>MotoMetrics</h1>
      <nav style={{ marginTop: "10px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/dashboard" style={{ marginRight: "10px" }}>
          Dashboard
        </Link>
        <Link to="/search" style={{ marginRight: "10px" }}>
          Search
        </Link>
        <Link to="/compare">Compare</Link>
      </nav>
    </header>
  );
};

export default Header;
