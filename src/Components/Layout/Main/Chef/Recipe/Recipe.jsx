import React, { useEffect, useState } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import SingleRecipe from "./SingleRecipe";
import { ThreeCircles } from "react-loader-spinner";

const Recipe = () => {
  const { id } = useParams();
  const recipe = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [chef, setChef] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(`http://localhost:5000/chef/${id}`);
      const chefInfo = await res.json();
      setChef(chefInfo);
      setLoading(false);
    };
    loadData();
  }, []);

  const { name, picture, experience_years, likes, description } =
    chef;
  if (navigation.state == 'loading') {
    return (
      <div className="flex justify-center items-center h-screen z-50">
        <ThreeCircles
          height="100"
          width="100"
          color="#570df8"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    );
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-12 lg:flex-row">
          <img src={picture} className="lg:max-w-2xl rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="pt-6">{description}</p>
            <p className="text-slate-500 font-medium">
              Experience: {experience_years} years
            </p>
            <p className="py-2">Number of Recipe: {recipe.length}</p>
            <p className="flex gap-2 items-center text-lg">
              <AiTwotoneLike /> {likes}
            </p>
            <button className="btn btn-primary mt-4">Learn More</button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-primary capitalize">
            Delicious Recipe from {name}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-12 py-16 px-8 lg:px-24">
          {recipe.map((singleRecipe) => {
            return (
              <SingleRecipe
                key={singleRecipe.id}
                recipe={singleRecipe}></SingleRecipe>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
