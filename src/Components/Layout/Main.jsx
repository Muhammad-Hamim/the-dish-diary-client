import React from "react";
import NavigationBar from "../Header/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Main = () => {
  
  return (
    <>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
