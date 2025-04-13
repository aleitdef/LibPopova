import React, { useContext } from "react";
import { BannerContext } from "../Banner.js";
import "../Banner.css";

function Slide({ data: { src, alt } }) {
  return (
    <div className="slide">
      <img src={src} alt={alt} className="slide-image" />
    </div>
  );
}

export default function SlidesList() {
  const { slideNumber, items } = useContext(BannerContext);

  return (
    <div
      className="slide-list"
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      
      {items.map((slide, index) => (
        <Slide key={index} data={slide} />
      ))}
    </div>
  );
}
