import React from "react";
import { useState, useEffect } from "react";
import "../Css/slider.css";
const Heroslider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const moveSlide = (n) => {
    const newIndex = slideIndex + n;
    if (newIndex >= 0 && newIndex < slides.length) {
      setSlideIndex(newIndex);
    } else if (newIndex >= slides.length) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slides.length - 1);
    }
  };

  const slides = [
    { src: "./Images/w1.jpg", alt: "Image 1" },
    { src: "./Images/w2.jpg", alt: "Image 2" },
    { src: "./Images/w3.jpg", alt: "Image 3" },
  ];
  return (
    <div className="hero-slider-container" data-aos="fade-left">
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </div>
        {/* <button className="prev" onClick={() => moveSlide(-1)}>
          &#10094;
        </button>
        <button className="next" onClick={() => moveSlide(1)}>
          &#10095;
        </button> */}
      </div>
    </div>
  );
};

export default Heroslider;
