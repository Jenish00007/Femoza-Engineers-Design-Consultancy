import React, { useState, useEffect } from "react";
import '../App.css';

const ServicesCarousel = ({ services }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, services.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

  return (
    <div className="services-carousel">
       <button className="carousel-btn prev" onClick={goToPrevSlide}>
          &#8592;
        </button>
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: "transform 0.5s ease-in-out",
            display: "flex",
          }}
        >
          {services.map((service, index) => (
            <div key={index} className="feature-card carousel-card">
              <div className="service-image">
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div> 
      </div>
       <button className="carousel-btn next" onClick={goToNextSlide}>
          &#8594; 
        </button>
    </div>
  );
};

export default ServicesCarousel;
