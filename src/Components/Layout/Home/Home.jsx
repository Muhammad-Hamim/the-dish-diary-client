import React from "react";
import { Outlet } from "react-router-dom";
import Hero from "../Main/Hero";
import OurServices from "../Main/OurServices";
import Chefs from "../Main/Chef/Chefs";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <OurServices></OurServices>
      <Chefs></Chefs>
    </>
  );
};

export default Home;
