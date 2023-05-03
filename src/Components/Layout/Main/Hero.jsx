import React from "react";
import hero1 from "../../../assets/Hero1.jpg";
import hero2 from "../../../assets/Hero2.jpg";
import hero3 from "../../../assets/Hero3.jpg";

const Hero = () => {
  return (
    <div>
      <div className="carousel w-full h-[80vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={hero1} className="w-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={hero2} className="w-full object-cover relative" />
          <div className="absolute top-0 w-full h-full flex justify-center items-center flex-col">
            <h1 className="text-4xl font-bold">
              When it satisfies your tastebuds
            </h1>
            <h2 className="text-2xl text-white">Hello Bangladesh</h2>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={hero3} className="w-full object-cover relative" />
          <div className="absolute top-0 w-full h-full flex justify-center items-center flex-col">
            <h1 className="text-5xl text-[#c69f7c] font-bold">
              When it satisfies your tastebuds
            </h1>
            <h2 className="text-6xl text-[#ffffff]">Sunday Brunch</h2>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={hero2} className="w-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
