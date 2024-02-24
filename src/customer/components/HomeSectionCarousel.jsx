import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import React, { useRef } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HomeSectionCard from "./HomeSectionCard";

const HomeSectionCarousel = () => {
  var settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let sliderRef = useRef(null);
  const slideNext = () => sliderRef.slickNext();
  const slidePrev = () => sliderRef.slickPrev();

  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
    <HomeSectionCard key={item} />
  ));

  return (
    <div className="px-4 lg:px-8">
      <div className="relative p-5">
        <IconButton
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            left: "1rem",
            top: "9rem",
            transform: "translateX(-50%) rotate(90deg)",
          }}
          onClick={slidePrev}
          aria-label="Previous"
        >
          <KeyboardArrowLeft
            sx={{ transform: "rotate(-90deg)", color: "black" }}
          />
        </IconButton>
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          {items}
        </Slider>
        <IconButton
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            right: "1rem",
            top: "9rem",
            transform: "translateX(50%) rotate(90deg)",
          }}
          onClick={slideNext}
          aria-label="Next"
        >
          <KeyboardArrowRight
            sx={{ transform: "rotate(-90deg)", color: "black" }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
