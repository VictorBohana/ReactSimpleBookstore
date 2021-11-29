import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({cartLength}) => {
  return (
    <nav className="navbar">
      <h1>SimpleBookstore</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/cart">Show cart ({cartLength})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
