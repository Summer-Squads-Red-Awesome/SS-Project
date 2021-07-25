import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import "../styles/global.css";

export default function Home() {
  return (
    <Layout>
      <div className="homescreen">
        <div className="home-blurb">Visualize the impact of your daily habits</div>
        <div className="grid-container">
          <div className="link-container">
          <Link className="home-link-container" to="/commute">
            <img
              src="fuel-cover.jpg"
              alt="The Daily Commute"
              className="cover-image"
            />
            <div className="home-link">The Daily Commute</div>
          </Link>
        </div>
        <div className="link-container">
          <Link className="home-link-container" to="/trash">
            <img
              src="trash-cover.jpg"
              alt="Wait, how much trash?"
              className="cover-image"
            />
            <div className="home-link">Wait, How Much Trash?</div>
          </Link>
        </div>
        <div className="link-container">
          <Link className="home-link-container" to="/diet">
            <img
              src="diet-cover.jpg"
              alt="A carnivore diet"
              className="cover-image"
            />
            <div className="home-link">A Carnivore Diet</div>
          </Link>
        </div>
        <div className="link-container">
          <Link className="home-link-container" to="/lights">
            <img
              src="lights-cover.jpg"
              alt="All the lights"
              className="cover-image"
            />
            <div className="home-link">All the Lights</div>
          </Link>
        </div>
        </div>
        
      </div>
    </Layout>
  )
}
