import React, { useEffect, useState, createContext } from "react";
import ImgBaner from "../../img/Banner.png";
import Dots from "./BanerComponents/Dots";
import SlidesList from "./BanerComponents/SlidesList";
import "./Banner.css";
export const BannerContext = createContext();

const Banner = function ({ width, height, autoPlay, autoPlayTime }) {
  let  items = [{src:ImgBaner, alt:"banner"},{src:ImgBaner, alt:"banner"},{src:ImgBaner, alt:"banner"}];
  const [slide, setSlide] = useState(0);
  
  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }

    setSlide(slideNumber);
  };

  const goToSlide = (number) => {
    setSlide(number % items.length);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [items.length, slide]); // when images uploaded or slide changed manually we start timer

  return (
    <div
      style={{ width, height }}
      className="slider"
    >
      <div className="banner-title">
        В библиотеке <br /> не шумят
        <svg
          width="134"
          height="72"
          viewBox="0 0 134 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className = "banner-title-svg"
        >
          <path
            d="M2.23706 62.2678C5.43658 60.6088 7.3375 56.0719 9.83453 53.6095C16.9078 46.6345 25.7522 41.4533 34.0031 36.0637C47.0211 27.56 60.0164 18.9482 73.4239 11.0637C78.4528 8.10637 84.1441 4.63135 89.6796 2.46282C92.4685 1.37025 85.5954 6.8454 83.5443 9.02818C70.5345 22.8728 57.296 37.0114 46.1877 52.4627C43.3452 56.4166 38.8455 61.7431 38.3609 66.9123C37.8934 71.898 45.0737 69.0486 47.5352 68.2884C75.4018 59.6818 152.641 17.6876 126.09 29.7564"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <BannerContext.Provider
        value={{
          goToSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
        }}
      >
        <SlidesList />
        <Dots />
      </BannerContext.Provider>
    </div>
  );
};


export default Banner;