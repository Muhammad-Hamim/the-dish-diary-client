import React from 'react';
import Lottie from "lottie-react";
import delivery from '../../../assets/LottieAnimation/delivery-man.json'
import HealthyFood from '../../../assets/LottieAnimation/Healthy-food.json'
import Chef from '../../../assets/LottieAnimation/chef.json'


const OurServices = () => {
  return (
    <div className="px-8 lg:px-24 py-12">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-primary">Our Services</h2>
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
          magnam?
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-8">
        <div className="bg-[#e6e6e6] rounded-md p-10 text-center">
          <Lottie
            className="w-52 lg:w-80 h-52"
            animationData={delivery}
            loop={true}
          />
          <h3 className="text-2xl text-primary font-bold">Food Delivery</h3>
          <p className="text-neutral">
            We provide home delivery all over the city
          </p>
        </div>
        <div className="bg-[#e6e6e6] rounded-md p-10 text-center">
          <Lottie
            className="w-52 lg:w-80 h-52"
            animationData={HealthyFood}
            loop={true}
          />
          <h3 className="text-2xl text-primary font-bold">Healthy Food</h3>
          <p className="text-neutral">We always conscious about food hygiene</p>
        </div>
        <div className="bg-[#e6e6e6] rounded-md p-10 text-center">
          <Lottie
            className="w-52 lg:w-80 h-52"
            animationData={Chef}
            loop={true}
          />
          <h3 className="text-2xl text-primary font-bold">Experience Chef</h3>
          <p className="text-neutral">
            We have 30+ experienced chef to serve you.
          </p>
        </div>
        <div className="bg-[#e6e6e6] rounded-md p-10 text-center">
          <Lottie
            className="w-52 lg:w-80 h-52"
            animationData={delivery}
            loop={true}
          />
          <h3 className="text-2xl text-primary font-bold">Food Delivery</h3>
          <p className="text-neutral">
            We provide home delivery all over the city
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;