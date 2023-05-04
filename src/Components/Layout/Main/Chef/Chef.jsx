import React, { useEffect, useState } from 'react';
import SingleChef from './SingleChef';
import { ThreeCircles } from 'react-loader-spinner';
import { useNavigation } from 'react-router-dom';

const Chef = () => {
  const [chef, setChef] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("https://the-dish-diary-server.vercel.app/chef");
      const data = await res.json();
      setChef(data);
      // console.log(data)
      setLoading(false);
    }
    loadData();
  }, [])
  if (loading) {
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
    <div className="px-8 lg:px-24 py-12 relative">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-primary">Our Chef</h2>
        <p className="text-lg">
          We have experienced chef to serve you!
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-10">
        {chef.map((singleChef) => {
          return (
            <SingleChef key={singleChef.id} chef={singleChef}></SingleChef>
          );
        })}
      </div>
    </div>
  );
};

export default Chef;