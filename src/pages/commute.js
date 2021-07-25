import React from 'react';
import Carousel from "@brainhubeu/react-carousel";
import Layout from "../components/Layout";
import "@brainhubeu/react-carousel/lib/style.css";
import "../styles/images.css";

export default function commute() {
  return (
    <Layout>
      <div className="commute-container">
        <h2>The Daily Commute</h2>
        <div className="commute-img-carousel-container">
          <Carousel plugins={["arrows"]}>
            <img src="img1.png" class="carousel-img" alt="" />
            <img src="img2.png" class="carousel-img" alt="" />
            <img src="img3.png" class="carousel-img" alt="" />
          </Carousel>
        </div>
      </div>
    </Layout>
  )
}
