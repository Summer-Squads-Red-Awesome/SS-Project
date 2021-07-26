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
  "/transportation/images/img1.jpg",
  "/transportation/images/img2.jpg",
  "/transportation/images/img3.jpg",
  "/transportation/images/img4.jpg",
]

export default function commute({ deviceType }) {
  return (
    <Layout>
      <div className="container">
        <h2>The Daily Commute</h2>
        <h3>
          How much gas would you save per day if you carpooled with one person
          everyday?
        </h3>
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
