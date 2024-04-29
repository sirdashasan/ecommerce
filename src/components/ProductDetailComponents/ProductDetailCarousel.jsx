import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const ProductDetailCarousel = () => {
  const history = useHistory();

  const navigate = () => {
    history.push("/shop");
  };

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative mt-12 md:mt-0 ">
      <div className="relative">
        <div
          className="w-full h-[400px] md:w-[600px] bg-cover duration-500"
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`,
            backgroundSize: "cover",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 "></div>
          {/* Text */}
        </div>
        {/* Left Arrow */}
        <div
          className="absolute top-[50%] -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={prevSlide}
        >
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </div>
        {/* Right Arrow */}
        <div
          className="absolute top-[50%] -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={nextSlide}
        >
          <FontAwesomeIcon icon={faChevronRight} size="2x" />
        </div>
        {/* Navigation Dots */}
        <div className="absolute bottom-16 w-full flex justify-center z-10">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`mx-1 text-white ${
                currentIndex === slideIndex ? "opacity-100" : "opacity-50"
              } transition-opacity duration-300`}
            >
              <FontAwesomeIcon icon={faCircle} />
            </div>
          ))}
        </div>
      </div>
      {/* Thumbnails */}
      <div className="flex justify-start items-center mt-5">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className="w-16 h-16 overflow-hidden mr-3"
            style={{
              background:
                currentIndex !== slideIndex ? "rgba(0,0,0,0.3)" : "transparent",
            }}
          >
            <img
              src={slide.url}
              alt={`Thumbnail ${slideIndex}`}
              className="w-full h-full object-cover"
              onClick={() => goToSlide(slideIndex)}
              style={{
                filter:
                  currentIndex !== slideIndex ? "brightness(70%)" : "none",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailCarousel;
