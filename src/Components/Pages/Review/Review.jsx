import React from "react";
import picture from "../../../assets/Review.jpg";
import r1 from '../../../assets/Reviewer/1.jpg'
import r2 from '../../../assets/Reviewer/2.jpg'
import Marquee from "react-fast-marquee";

const Review = () => {
  return (
    <div
      className="bg-cover bg-center w-full flex py-20"
      style={{
        backgroundImage: `url(${picture})`,
      }}>
      <Marquee>
        <div className="card w-96 bg-[#2a303c] bg-opacity-50 shadow-xl">
          <figure className="w-12 h-12 ring-2 ring-violet-80000 ring-offset-2 rounded-full mx-auto mt-6 -mb-3">
            <img src={r1} alt="" className="w-full h-full" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-slate-400 text-lg font-semibold">Michael</h2>
            <p className="text-primary-content italic">
              "The Dish Dairy is my go-to for finding recipes that are both
              simple and delicious. I appreciate the focus on using quality
              ingredients and easy-to-follow instructions."
            </p>
          </div>
        </div>
        <div className="card w-96 bg-[#2a303c] bg-opacity-50 shadow-xl">
          <figure className="w-12 h-12 ring-2 ring-violet-80000 ring-offset-2 rounded-full mx-auto mt-6 -mb-3">
            <img src={r1} alt="" className="w-full h-full" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-slate-400 text-lg font-semibold">Michael</h2>
            <p className="text-primary-content italic">
              "The Dish Dairy is my go-to for finding recipes that are both
              simple and delicious. I appreciate the focus on using quality
              ingredients and easy-to-follow instructions."
            </p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Review;
