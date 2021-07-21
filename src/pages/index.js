import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import * as styles from "../styles/global.css";

export default function Home() {
  return (
    <Layout>
      <div className="homescreen">
        <div className="link-container">
          <Link classname="home-link" to="/trash">
            Trash
          </Link>
        </div>
        <div className="link-container">
          <Link classname="home-link" to="/water">
            Water
          </Link>
        </div>
        <div className="link-container">
          <Link classname="home-link" to="/fuel">
            Fuel
          </Link>
        </div>
        <div className="link-container">
          <Link classname="home-link" to="/food">
            Food
          </Link>
        </div>
      </div>
    </Layout>
  )
}
