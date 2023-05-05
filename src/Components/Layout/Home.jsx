import React from "react";
import Hero from '../Pages/Home/Hero';
import OurServices from '../Pages/Home/OurServices';
import Chef from '../Pages/Chef/Chef/Chef';
import Contact from '../Pages/Contact/Contact';



const Home = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <Chef />
      <Contact/>
    </>
  );
};

export default Home;
