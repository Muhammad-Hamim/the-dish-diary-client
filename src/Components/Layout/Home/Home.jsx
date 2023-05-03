import React from "react";
import NavigationBar from "../../Header/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Hero from "../Main/Hero";

const Home = () => {
  return (
    <>
      <Hero></Hero>
    </>
  );
};

export default Home;
