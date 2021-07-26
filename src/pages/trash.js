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
  "/trash/images/img0.jpg",
  "/trash/images/img1.jpg",
  "/trash/images/img2.jpg",
  "/trash/images/img3.jpg",
  "/trash/images/img4.jpg",
  "/trash/images/img5.jpg",
]

export default function trash({ deviceType }) {
  return (
    <Layout>
      <div className="container">
        <h2>Wait, How Much Trash?</h2>
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
                    margin: "auto",
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
