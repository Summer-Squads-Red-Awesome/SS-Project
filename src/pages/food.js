import React from 'react';
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import * as styles from "../styles/images.css";

export default function food() {
  return (
    <div className="food-container">
      <h2>Food</h2>
      <div className="food-img-carousel-container">
        <Carousel
          plugins={[
            "clickToChange",
            "centered",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
        >
          <img src="img1.png" />
          <img src="img2.png" />
          <img src="img3.png" />
        </Carousel>
      </div>
    </div>
  )
}
