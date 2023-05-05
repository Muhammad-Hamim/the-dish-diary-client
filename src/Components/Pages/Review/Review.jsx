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
import LazyLoad from "react-lazyload";

const Review = () => {
  return (
    <LazyLoad height={500}>
      <div
        className="bg-cover bg-center w-full flex py-20"
        style={{
          backgroundImage: `url(${picture})`,
        }}>
        <Marquee speed={70}>
          <div className="flex gap-20">
            <div className="card w-72 lg:w-96 bg-[#2a303c] bg-opacity-50 shadow-xl ml-20">
              <figure className="w-12 h-12 ring-2 ring-violet-80000 ring-offset-2 rounded-full mx-auto mt-6 -mb-3">
                <img src={r1} alt="" className="w-full h-full" />
              </figure>
              <div className="card-body text-center">
                <h2 className="text-slate-400 text-lg font-semibold">
                  Michael
                </h2>
                <p className="text-primary-content italic">
                  "The Dish Dairy is my go-to for finding recipes that are both
                  simple and delicious. I appreciate the focus on using quality
                  ingredients and easy-to-follow instructions."
                </p>
              </div>
            </div>
            <div className="card w-72 lg:w-96 bg-[#2a303c] bg-opacity-50 shadow-xl">
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
            <div className="card w-72 lg:w-96 bg-[#2a303c] bg-opacity-50 shadow-xl">
              <figure className="w-12 h-12 ring-2 ring-violet-80000 ring-offset-2 rounded-full mx-auto mt-6 -mb-3">
                <img src={r3} alt="" className="w-full h-full" />
              </figure>
              <div className="card-body text-center">
                <h2 className="text-slate-400 text-lg font-semibold">Andrew</h2>
                <p className="text-primary-content italic">
                  "I've been a fan of The Dish Dairy for years and it's never
                  failed to deliver amazing recipes. The website is
                  user-friendly and makes it easy to find exactly what you're
                  looking for."
                </p>
              </div>
            </div>
            <div className="card w-72 lg:w-96 bg-[#2a303c] bg-opacity-50 shadow-xl">
              <figure className="w-12 h-12 ring-2 ring-violet-80000 ring-offset-2 rounded-full mx-auto mt-6 -mb-3">
                <img src={r4} alt="" className="w-full h-full" />
              </figure>
              <div className="card-body text-center">
                <h2 className="text-slate-400 text-lg font-semibold">
                  Christopher
                </h2>
                <p className="text-primary-content italic">
                  "As someone who is always on the go, The Dish Dairy's meal
                  prep ideas have been a lifesaver. I appreciate the focus on
                  quick and easy recipes that are still nutritious."
                </p>
              </div>
            </div>
            <div className="card w-72 lg:w-96 bg-[#2a303c] bg-opacity-50 shadow-xl">
              <figure className="w-12 h-12 ring-2 ring-violet-80000 ring-offset-2 rounded-full mx-auto mt-6 -mb-3">
                <img src={r5} alt="" className="w-full h-full" />
              </figure>
              <div className="card-body text-center">
                <h2 className="text-slate-400 text-lg font-semibold">Daniel</h2>
                <p className="text-primary-content italic">
                  "The Dish Dairy's community of food lovers is so welcoming and
                  supportive. I love being able to connect with other cooks and
                  share my experiences."
                </p>
              </div>
            </div>
            <div className="card w-72 lg:w-96 bg-[#2a303c] bg-opacity-50 shadow-xl">
              <figure className="w-12 h-12 ring-2 ring-violet-80000 ring-offset-2 rounded-full mx-auto mt-6 -mb-3">
                <img src={r6} alt="" className="w-full h-full" />
              </figure>
              <div className="card-body text-center">
                <h2 className="text-slate-400 text-lg font-semibold">
                  Matthew
                </h2>
                <p className="text-primary-content italic">
                  "The Dish Dairy's seasonal recipes are always on point. I love
                  being able to incorporate fresh, in-season produce into my
                  meals."
                </p>
              </div>
            </div>
            <div className="card w-72 lg:w-96 bg-[#2a303c] bg-opacity-50 shadow-xl">
              <figure className="w-12 h-12 ring-2 ring-violet-80000 ring-offset-2 rounded-full mx-auto mt-6 -mb-3">
                <img src={r7} alt="" className="w-full h-full" />
              </figure>
              <div className="card-body text-center">
                <h2 className="text-slate-400 text-lg font-semibold">James</h2>
                <p className="text-primary-content italic">
                  "The Dish Dairy has helped me expand my cooking horizons and
                  try new things. The website is a great resource for learning
                  about different cuisines and techniques."
                </p>
              </div>
            </div>
            <div className="card w-72 lg:w-96 bg-[#2a303c] bg-opacity-50 shadow-xl">
              <figure className="w-12 h-12 ring-2 ring-violet-80000 ring-offset-2 rounded-full mx-auto mt-6 -mb-3">
                <img src={r8} alt="" className="w-full h-full" />
              </figure>
              <div className="card-body text-center">
                <h2 className="text-slate-400 text-lg font-semibold">Ethan</h2>
                <p className="text-primary-content italic">
                  "I've recommended The Dish Dairy to all of my friends and
                  family who love to cook. It's truly a one-stop-shop for all
                  things food-related."
                </p>
              </div>
            </div>
            <div className="card w-72 lg:w-96 bg-[#2a303c] bg-opacity-50 shadow-xl">
              <figure className="w-12 h-12 ring-2 ring-violet-80000 ring-offset-2 rounded-full mx-auto mt-6 -mb-3">
                <img src={r9} alt="" className="w-full h-full" />
              </figure>
              <div className="card-body text-center">
                <h2 className="text-slate-400 text-lg font-semibold">
                  Alexander
                </h2>
                <p className="text-primary-content italic">
                  "The Dish Dairy's recipes are always so flavorful and
                  satisfying. I love being able to create restaurant-quality
                  dishes at home."
                </p>
              </div>
            </div>
            <div className="card w-72 lg:w-96 bg-[#2a303c] bg-opacity-50 shadow-xl">
              <figure className="w-12 h-12 ring-2 ring-violet-80000 ring-offset-2 rounded-full mx-auto mt-6 -mb-3">
                <LazyLoad>
                  <img src={r10} alt="" className="w-full h-full" />
                </LazyLoad>
              </figure>
              <div className="card-body text-center">
                <h2 className="text-slate-400 text-lg font-semibold">
                  Jonathan
                </h2>
                <p className="text-primary-content italic">
                  "I love that The Dish Dairy includes tips and tricks for
                  making the perfect dish. It's helped me improve my cooking
                  skills and feel more confident in the kitchen."
                </p>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </LazyLoad>
  );
};

export default Review;
