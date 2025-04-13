import React, { useContext } from "react";
import { BannerContext } from "../Banner.js";
import "../Banner.css";

function Dot({ number }) {
  const { goToSlide, slideNumber } = useContext(BannerContext);

  return (
    <div
      className={`dot ${slideNumber === number ? "selected" : "not-selected"}`}
      onClick={() => goToSlide(number)}
    >
      {slideNumber === number ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <circle cx="7.5" cy="7.5" r="7.5" fill="white" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <circle cx="7.5" cy="7.5" r="7" stroke="white" />
        </svg>
      )}
    </div>
  );
}

export default function Dots() {
  const { slidesCount } = useContext(BannerContext);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />);
    }

    return dots;
  };

  return <div className="dots">{renderDots()}</div>;
}
