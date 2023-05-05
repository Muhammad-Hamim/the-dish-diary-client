import React from "react";
import Lottie from "lottie-react";
import contact from "../../../assets/LottieAnimation/contact-us.json";

const Contact = () => {
  return (
    <div>
      <div className="bg-[#e6e6e6] px-8 lg:px-24 py-12">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-primary">Contact us</h2>
          <p className="text-lg text-gray-900">
            Your message is very important to us! Don't shy, Please text us!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 items-center">
          <div>
            <Lottie animationData={contact} loop={true}></Lottie>
          </div>
          <div className="card border-5 border-transparent w-full shadow-gray-500 bg-transparent">
            <div className="card-body space-y-5">
              <div className="form-control ">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered border-2 border-primary bg-transparent"
                />
              </div>
              <div className="form-control ">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered border-2 border-primary bg-transparent"
                />
              </div>
              <div className="form-control">
                <textarea
                  type="text"
                  placeholder="Your message"
                  className="textarea resize-none h-44 textarea-bordered bg-transparent border-2 border-primary"></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
