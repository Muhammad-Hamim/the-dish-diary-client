import React, { useEffect, useState } from "react";
import Chef from "./Chef";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("http://localhost:5000/chef");
      const data = await res.json();
      // console.log(data);
      setChefs(data);
    };
    loadData();
  }, []);
  return (
    <div className="px-8 lg:px-24 py-12">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-primary">Our Chefs</h2>
        <p className="text-lg">We have experienced chef to serve you!</p>
      </div>
      <div>
        {
          chefs.map(chef => {
            <Chef key={chef.id} chef={chef}></Chef>
          })
        }
      </div>
    </div>
  );
};

export default Chefs;
