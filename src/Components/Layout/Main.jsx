import React from "react";
import NavigationBar from "../Header/NavigationBar";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";

const Main = () => {
  const navigation = useNavigation();
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
    <>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
