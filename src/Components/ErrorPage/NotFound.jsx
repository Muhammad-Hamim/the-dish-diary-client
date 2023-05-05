import React from "react";
import errorPage from "../../assets/LottieAnimation/errorPage.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="max-w-screen h-screen">
        <div className="absolute left-1/2 bottom-40 -translate-x-1/2">
          <Link to='/'>
            <button className="btn btn-primary">Go to Home page</button>
          </Link>
        </div>
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
