import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const Hero = () => {
  const history = useHistory();

  const navigate = () => {
    history.push("/shop");
  };

  const slides = [
    {
      url: "/images/hero-image-2.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
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
    <div className="h-[840px] w-full md:w-full relative group">
      <div
        className={`w-full h-full bg-cover duration-500 ${
          currentIndex === 0 ? "bg-[center_20%]" : "bg-center"
        }`}
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundSize: "cover",
        }}
      ></div>
      {/* Yazılar */}
      <div className="absolute inset-0 flex flex-col md:justify-center items-center md:items-start text-center text-white px-4 md:mx-48 mt-56 md:mt-0 ">
        <p className="text-sm font-semibold">SUMMER 2020</p>
        <p className="my-14 mx-32 md:mx-0 text-3xl font-bold">NEW COLLECTION</p>
        <p className="font-base text-xl mx-20 md:ml-0 md:text-left">
          We know how large objects will act,
          <br className="hidden md:block" /> but things on a small scale.
        </p>
        <button
          className="bg-[#2DC071] text-white py-4 px-16 rounded font-bold mt-16"
          onClick={navigate}
        >
          SHOP NOW
        </button>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FontAwesomeIcon icon={faChevronLeft} onClick={prevSlide} size="2x" />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] right-5 md:right-[2%] lg:right-[2%] xl:right-[2%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FontAwesomeIcon icon={faChevronRight} onClick={nextSlide} size="2x" />
      </div>
      {/* Navigation Dots */}
      <div className="absolute bottom-16 w-full flex justify-center z-10">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`mx-1 ${
              currentIndex === slideIndex ? "text-white" : "text-white/50"
            }`}
          >
            <FontAwesomeIcon icon={faCircle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
