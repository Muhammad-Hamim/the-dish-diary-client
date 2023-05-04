import React from "react";
import NavigationBar from "../Header/NavigationBar";
import Footer from "../Footer/Footer";
import errorPage from "../../assets/LottieAnimation/errorPage.json";
import Lottie from "lottie-react";

const NotFound = () => {
  return (
    <div>
      <div className="max-w-screen h-screen">
        <Lottie
          className="w-[80vw] h-[80vh]"
          animationData={errorPage}
          loop={true}
        />
      </div>
    </div>
  );
};

export default NotFound;
