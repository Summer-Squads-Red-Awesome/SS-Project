import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/resources">Resources</Link>
      </div>
    </nav>
  )
}
