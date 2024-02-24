import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { carouselData } from "./CarouselData";

const MainCarousel = () => {
  const items = carouselData.map((item) => (
    <img
      src={item.imageUrl}
      alt=""
      role="presentation"
      className="cursor-pointer"
    />
  ));
  return (
    <AliceCarousel
      items={items}
      autoPlay={true}
      autoPlayInterval={2000}
      infinite
      disableButtonsControls
    />
  );
};

export default MainCarousel;
