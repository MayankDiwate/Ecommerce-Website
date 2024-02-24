import React from "react";
import HomeSectionCarousel from "../components/HomeSectionCarousel";
import MainCarousel from "../components/MainCarousel/MainCarousel";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20">
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
      </div>
    </div>
  );
};

export default HomePage;
