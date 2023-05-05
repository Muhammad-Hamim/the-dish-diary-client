import React from "react";
import picture from "../../../assets/Review.jpg";
import r1 from "../../../assets/Reviewer/1.jpg";
import r2 from "../../../assets/Reviewer/2.jpg";
import r3 from "../../../assets/Reviewer/3.jpg";
import r4 from "../../../assets/Reviewer/4.jpg";
import r5 from "../../../assets/Reviewer/5.jpg";
import r6 from "../../../assets/Reviewer/6.jpg";
import r7 from "../../../assets/Reviewer/7.jpg";
import r8 from "../../../assets/Reviewer/8.jpg";
import r9 from "../../../assets/Reviewer/9.jpg";
import r10 from "../../../assets/Reviewer/10.jpg";
import Marquee from "react-fast-marquee";

const Review = () => {
  return (
    <div
      className="bg-cover bg-center w-full flex py-20"
      style={{
        backgroundImage: `url(${picture})`,
      }}>
      <Marquee gradient gradientColor={[42,48,60]} speed={70}>
        <div className="flex gap-20">
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
              <img src={r2} alt="" className="w-full h-full" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-slate-400 text-lg font-semibold">David</h2>
              <p className="text-primary-content italic">
                "The variety of recipes on The Dish Dairy is impressive. From
                classic dishes to unique flavor combinations, there's always
                something new to try."
              </p>
            </div>
          </div>
          <div className="card w-96 bg-[#2a303c] bg-opacity-50 shadow-xl">
            <figure className="w-12 h-12 ring-2 ring-violet-80000 ring-offset-2 rounded-full mx-auto mt-6 -mb-3">
              <img src={r3} alt="" className="w-full h-full" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-slate-400 text-lg font-semibold">David</h2>
              <p className="text-primary-content italic">
                "The variety of recipes on The Dish Dairy is impressive. From
                classic dishes to unique flavor combinations, there's always
                something new to try."
              </p>
            </div>
          </div>
          <div className="card w-96 bg-[#2a303c] bg-opacity-50 shadow-xl">
            <figure className="w-12 h-12 ring-2 ring-violet-80000 ring-offset-2 rounded-full mx-auto mt-6 -mb-3">
              <img src={r4} alt="" className="w-full h-full" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-slate-400 text-lg font-semibold">David</h2>
              <p className="text-primary-content italic">
                "The variety of recipes on The Dish Dairy is impressive. From
                classic dishes to unique flavor combinations, there's always
                something new to try."
              </p>
            </div>
          </div>
          <div className="card w-96 bg-[#2a303c] bg-opacity-50 shadow-xl">
            <figure className="w-12 h-12 ring-2 ring-violet-80000 ring-offset-2 rounded-full mx-auto mt-6 -mb-3">
              <img src={r5} alt="" className="w-full h-full" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-slate-400 text-lg font-semibold">David</h2>
              <p className="text-primary-content italic">
                "The variety of recipes on The Dish Dairy is impressive. From
                classic dishes to unique flavor combinations, there's always
                something new to try."
              </p>
            </div>
          </div>
          <div className="card w-96 bg-[#2a303c] bg-opacity-50 shadow-xl">
            <figure className="w-12 h-12 ring-2 ring-violet-80000 ring-offset-2 rounded-full mx-auto mt-6 -mb-3">
              <img src={r6} alt="" className="w-full h-full" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-slate-400 text-lg font-semibold">David</h2>
              <p className="text-primary-content italic">
                "The variety of recipes on The Dish Dairy is impressive. From
                classic dishes to unique flavor combinations, there's always
                something new to try."
              </p>
            </div>
          </div>
          <div className="card w-96 bg-[#2a303c] bg-opacity-50 shadow-xl">
            <figure className="w-12 h-12 ring-2 ring-violet-80000 ring-offset-2 rounded-full mx-auto mt-6 -mb-3">
              <img src={r7} alt="" className="w-full h-full" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-slate-400 text-lg font-semibold">David</h2>
              <p className="text-primary-content italic">
                "The variety of recipes on The Dish Dairy is impressive. From
                classic dishes to unique flavor combinations, there's always
                something new to try."
              </p>
            </div>
          </div>
          <div className="card w-96 bg-[#2a303c] bg-opacity-50 shadow-xl">
            <figure className="w-12 h-12 ring-2 ring-violet-80000 ring-offset-2 rounded-full mx-auto mt-6 -mb-3">
              <img src={r8} alt="" className="w-full h-full" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-slate-400 text-lg font-semibold">David</h2>
              <p className="text-primary-content italic">
                "The variety of recipes on The Dish Dairy is impressive. From
                classic dishes to unique flavor combinations, there's always
                something new to try."
              </p>
            </div>
          </div>
          <div className="card w-96 bg-[#2a303c] bg-opacity-50 shadow-xl">
            <figure className="w-12 h-12 ring-2 ring-violet-80000 ring-offset-2 rounded-full mx-auto mt-6 -mb-3">
              <img src={r9} alt="" className="w-full h-full" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-slate-400 text-lg font-semibold">David</h2>
              <p className="text-primary-content italic">
                "The variety of recipes on The Dish Dairy is impressive. From
                classic dishes to unique flavor combinations, there's always
                something new to try."
              </p>
            </div>
          </div>
          <div className="card w-96 bg-[#2a303c] bg-opacity-50 shadow-xl">
            <figure className="w-12 h-12 ring-2 ring-violet-80000 ring-offset-2 rounded-full mx-auto mt-6 -mb-3">
              <img src={r10} alt="" className="w-full h-full" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-slate-400 text-lg font-semibold">David</h2>
              <p className="text-primary-content italic">
                "The variety of recipes on The Dish Dairy is impressive. From
                classic dishes to unique flavor combinations, there's always
                something new to try."
              </p>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Review;
