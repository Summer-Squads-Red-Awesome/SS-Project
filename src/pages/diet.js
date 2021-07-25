import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import Layout from "../components/Layout";
import "@brainhubeu/react-carousel/lib/style.css";
import "../styles/images.css"

export default function diet() {
  return (
    <Layout>
      <div className="diet-container">
        <h2>A Carnivore Diet</h2>
        <div className="diet-img-carousel-container">
          <Carousel plugins={["arrows"]}>
            <img src="img1.png" className="carousel-img" alt="" />
            <img src="img2.png" className="carousel-img" alt="" />
            <img src="img3.png" className="carousel-img" alt="" />
          </Carousel>
        </div>
      </div>
    </Layout>
  )
}
