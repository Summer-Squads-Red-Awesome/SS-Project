import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import Layout from "../components/Layout";
import "@brainhubeu/react-carousel/lib/style.css";

export default function lights() {
  return (
    <Layout>
      <div className="lights-container">
        <h2>All the Lights</h2>
        <div className="lights-img-carousel-container">
          <Carousel plugins={["arrows"]}>
            <img src="img1.png" class="carousel-img" />
            <img src="img2.png" class="carousel-img" />
            <img src="img3.png" class="carousel-img" />
          </Carousel>
        </div>
      </div>
    </Layout>
  )
}
