import React, { useState } from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar, FaRegBookmark, FaBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

const SingleRecipe = ({ recipe }) => {
  const [addBookmark, setAddBookmark] = useState(true);
  const { picture, recipe_name, cooking_method, ingredients, rating } = recipe;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 lg:h-[450px] shadow-xl">
        <figure className="bg-cover bg-center lg:w-1/2">
          <img className="w-full h-full" src={picture} alt="" />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title font-bold">{recipe_name}</h2>
          <div>
            <p className="text-xl font-semibold">Ingredients: </p>
            {ingredients.slice(0, 5).map((ingredient) => {
              return (
                <li key={ingredient} className="list-decimal">
                  {ingredient}
                </li>
              );
            })}
          </div>
          <div>
            <p className="text-xl font-semibold">Cooking Method:</p>
            <p>{cooking_method}</p>
          </div>
          <div className="card-actions justify-end items-center">
            <p className="space-x-3">
              <span>{rating}</span>
              <Rating
                placeholderRating={rating}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar className="text-warning" />}
                fullSymbol={<FaStar />}
                readonly
              />
            </p>
            <div className="text-xl">
              {addBookmark ? (
                <button
                  className="cursor-pointer"
                  onClick={() => {
                    setAddBookmark(false);
                    toast(
                      "Successfully this item added to your favorite list!"
                    );
                  }}>
                  <FaRegBookmark></FaRegBookmark>
                </button>
              ) : (
                <button disabled className="cursor-not-allowed">
                  <FaBookmark></FaBookmark>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
