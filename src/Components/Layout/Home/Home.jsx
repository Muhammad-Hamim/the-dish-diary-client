import React from "react";
import { Outlet } from "react-router-dom";
import Hero from "../Main/Hero";
import OurServices from "../Main/OurServices";
import Chef from "../Main/Chef/Chef";
import Contact from "../Main/Contact/Contact";


const Home = () => {
  return (
    <>
      <Hero></Hero>
      <OurServices></OurServices>
      <Chef></Chef>
      <Contact></Contact>
    </>
  );
};

export default Home;
