import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "./Slider.css";
import { Link } from "react-router-dom";

const backgroundSlides = [
  {
    description1: "Seçiminiz Sizin Haqqınızda Çox Şey Deyir.",
    description2: "Evinizi ifadə etmək üçün 300-dən çox yol alın.",
    backgroundImg: "/image/bck13.jpg",
    buttonName: "İNDİ AL",
  },
  {
    description1: "Yeni Məhsullar Kəşf Edin",
    description2: "Evinizi bəzəmək üçün unikal seçimlər",
    backgroundImg: "/image/divan b2.jpg",
    buttonName: "İNDİ AL",
  },
  {
    description1: "İlham Verici Dekor",
    description2: "Dəblə uyğun gələn dekorasiya məhsulları",
    backgroundImg: "/image/bck12.jpg",
    buttonName: "İNDİ AL",
  },
  // Add more slides as necessary
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % backgroundSlides.length); // Looping the slides
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <div
        className="hero-section d-flex justify-content-center align-items-center"
        style={{ height: "100vh", position: "relative" }}
      >
        <img
          src={backgroundSlides[currentSlide].backgroundImg}
          alt="Background"
          className="hero-image"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "-1",
          }}
        />

        <div className="hero-content text-center">
          <h1 className="display-4 text-white" style={{ fontWeight: "bold" }}>
            {backgroundSlides[currentSlide].description1}
          </h1>
          <p className="text-white lead">
            {backgroundSlides[currentSlide].description2}
          </p>
          <Link to={"/products"} style={{color:'inherit'}}>
            <Button
              variant="primary"
              size="lg"
              style={{ borderRadius: "30px", background: "white" }}
            >
              indi al
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Slider;
