import React from "react";
import Hero from '../Pages/Home/Hero';
import OurServices from '../Pages/Home/OurServices';
import Chef from '../Pages/Chef/Chef/Chef';
import Contact from '../Pages/Contact/Contact';
import Review from "../Pages/Review/Review";



const Home = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <Chef />
      <Review></Review>
      <Contact/>
    </>
  );
};

export default Home;
