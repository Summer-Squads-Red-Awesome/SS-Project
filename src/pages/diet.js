import React from "react"
import Layout from "../components/Layout"
import "../styles/images.css"
import "../styles/pages.css"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
}
const images = [
  "/carnivore/images/img1.png",
  "/carnivore/images/img2.png",
  "/carnivore/images/img3.png",
  "/carnivore/images/img4.png",
  "/carnivore/images/img5.png",
]

export default function diet({ deviceType }) {
  return (
    <Layout>
      <div className="container">
        <h2>A Carnivore Diet</h2>

        <div className="diet-img-carousel-container">
          <Carousel
            ssr
            partialVisbile
            deviceType={deviceType}
            itemClass="image-item"
            responsive={responsive}
          >
            {images.slice(0, 5).map(image => {
              return (
                <img
                  draggable={true}
                  style={{
                    width: "auto",
                    height: "auto",
                    marginLeft: "10rem",
                    textAlign: "center",
                  }}
                  src={image}
                />
              )
            })}
          </Carousel>
        </div>
      </div>
    </Layout>
  )
}
