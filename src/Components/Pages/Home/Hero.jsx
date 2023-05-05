import React from "react";
import Lottie from "lottie-react";
import hero from "../../../assets/Hero.jpg";
import welcome from "../../../assets/LottieAnimation/hero.json";
import LazyLoad from "react-lazyload";

const Hero = () => {
  return (
    <LazyLoad height={1024}>
      <div
        className="bg-cover bg-center lg:h-[90vh] flex"
        style={{
          backgroundImage: `url(${hero})`,
        }}>
        <div className="flex justify-center p-8 lg:p-0 flex-col items-center bg-gray-900 bg-opacity-70 w-full">
          <Lottie
            className="w-52 mx-auto"
            animationData={welcome}
            loop={true}
          />
          <h2 className="text-3xl lg:text-5xl font-bold text-primary text-center">
            Welcome to Dish Diary
          </h2>
          <p className="my-5 text-center lg:w-[40%] mx-auto text-slate-300">
            Welcome to The Dish Dairy, your go-to source for all things food!
            Discover new recipes, cooking techniques, and culinary inspiration
            to elevate your meals and satisfy your taste buds. Join our
            community of food lovers and explore our collection of delicious
            dishes from around the world. Let's dig in and explore the wonderful
            world of food together!
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </LazyLoad>
  );
};

export default Hero;
