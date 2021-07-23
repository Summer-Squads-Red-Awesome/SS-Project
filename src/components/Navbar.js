import { Link } from "gatsby";
import React from "react";
import "../styles/global.css";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-links-container">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/visualizations" className="nav-link">Visualizations</Link>
        <Link to="/resources" className="nav-link">Resources</Link>
      </div>
    </nav>
  )
}
