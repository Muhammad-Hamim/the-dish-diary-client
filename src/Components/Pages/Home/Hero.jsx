import React from "react";
import Lottie from "lottie-react";
import hero from "../../../assets/Hero.jpg";
import welcome from "../../../assets/LottieAnimation/hero.json";

const Hero = () => {
  return (
    <div className="lg:grid lg:gap-5 lg:grid-cols-2 lg:px-24 bg-[#e6e6e6]">
      <div className="hidden lg:block">
        <img src={hero} alt="" />
      </div>
      <div className="flex justify-center p-8 lg:p-0 flex-col items-center">
        <Lottie className="w-52 mx-auto" animationData={welcome} loop={true} />
        <h2 className="text-3xl lg:text-5xl font-bold text-primary text-center">
          Welcome to Our Dish Diary Website
        </h2>
        <p className="my-5 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
          molestias exercitationem provident asperiores tempora amet dolorem
          ipsam! Magnam aut aperiam nulla asperiores adipisci rem temporibus
          vel, explicabo delectus iste. Harum?
        </p>
        <button className="btn btn-primary">Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
