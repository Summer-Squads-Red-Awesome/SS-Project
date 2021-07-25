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
            <img
              src="fuel-cover.jpg"
              alt="The Daily Commute"
              className="cover-image"
            />
            The Daily Commute
          </Link>
        </div>
        <div className="link-container">
          <Link classname="home-link" to="/trash">
            <img
              src="trash-cover.jpg"
              alt="Wait, how much trash?"
              className="cover-image"
            />
            Wait, How Much Trash?
          </Link>
        </div>
        <div className="link-container">
          <Link classname="home-link" to="/diet">
            <img
              src="diet-cover.jpg"
              alt="A carnivore diet"
              className="cover-image"
            />
            A Carnivore Diet
          </Link>
        </div>
        <div className="link-container">
          <Link classname="home-link" to="/lights">
            <img
              src="lights-cover.jpg"
              alt="All the lights"
              className="cover-image"
            />
            All the Lights
          </Link>
        </div>
      </div>
    </Layout>
  )
}
