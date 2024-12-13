import React, { useState } from "react";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "/images/i1.jpg",
      title: "New York!",
      description: "We Love the Big Apple!",
    },
    {
      image: "/images/i3.jpg",
      title: "Los Angeles!",
      description: "LA is always so much fun!",
    },
    {
      image: "/images/i2.jpg",
      title: "Chicago!",
      description: "Thank you, Chicago!",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img
          src={slides[currentIndex].image}
          alt={`image`}
        />
        <h3>{slides[currentIndex].title}</h3>
        <p>{slides[currentIndex].description}</p>
      </div>
      <p className="left" onClick={handleNext}>
        {">"}
      </p>
      <p className="right" onClick={handlePrev}>
        {"<"}
      </p>
     
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
