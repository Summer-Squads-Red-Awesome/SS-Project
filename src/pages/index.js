import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/global.css";

export default function Home() {
  return (
    <div className="homescreen">
      <div className="link-container">
        <Link className="home-link" to="/trash">
          Trash
        </Link>
      </div>
      <div className="link-container">
        <Link className="home-link" to="/water">
          Water
        </Link>
      </div>
      <div className="link-container">
        <Link className="home-link" to="/fuel">
          Fuel
        </Link>
      </div>
      <div className="link-container">
        <Link className="home-link" to="/food">
          Food
        </Link>
      </div>
    </div>
  )
}
