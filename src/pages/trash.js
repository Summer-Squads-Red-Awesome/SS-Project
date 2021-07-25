import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import Layout from "../components/Layout";
import '@brainhubeu/react-carousel/lib/style.css';
import "../styles/images.css";

export default function trash() {
  return (
    <Layout>
      <div className="trash-container">
        <h2>Wait, How Much Trash?</h2>
        <div className="trash-img-carousel-container">
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
