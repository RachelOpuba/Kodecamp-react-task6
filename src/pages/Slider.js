import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <div className="slider">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/Adobong-Baboy-Recipe.jpg"}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>FOOD ODERING JUST GOT EASIER</h1>
            <button className="explore">Explore Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/Okro_Soup_Ray.jpg"}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>FOOD ODERING JUST GOT EASIER</h1>
            <button className="explore">Explore Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/IMG_1220201612.jpg"}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1 className="caption">FOOD ODERING JUST GOT EASIER</h1>
            <button className="explore">Explore Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
