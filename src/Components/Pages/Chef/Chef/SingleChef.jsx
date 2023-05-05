import React from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { Link } from "react-router-dom";

const SingleChef = ({ chef }) => {
  const { name, id, picture, experience_years, likes, recipe_count } = chef;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-[362px]" src={picture} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-slate-500 font-medium">
            Experience: {experience_years} years
          </p>
          <p className="text-slate-500 font-medium">
            Number of Recipe: {recipe_count}
          </p>
          <div className="card-actions justify-end items-center">
            <p className="flex gap-2 items-center text-lg">
              <AiTwotoneLike /> {likes}
            </p>
            <Link to={`/recipe/${id}`}>
              <button className="btn btn-primary">View Recipe</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleChef;
