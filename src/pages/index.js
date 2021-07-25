import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import * as styles from "../styles/global.css";

export default function Home() {
  return (
    <Layout>
      <div className="homescreen">
        <div className="link-container">
          <Link classname="home-link" to="/commute">
            The Daily Commute
          </Link>
        </div>
        <div className="link-container">
          <Link classname="home-link" to="/trash">
            Wait, How Much Trash?
          </Link>
        </div>
        <div className="link-container">
          <Link classname="home-link" to="/diet">
            A Carnivore Diet
          </Link>
        </div>
        <div className="link-container">
          <Link classname="home-link" to="/lights">
            All the Lights
          </Link>
        </div>
      </div>
    </Layout>
  )
}
