import React from "react";
import bg from "../../../../assets/Hero3.jpg";

const Contact = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bg})`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content grid-cols-1 text-center text-neutral-content">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-accent">Contact us</h2>
            <p className="text-lg">
              Your message is very important to us! Don't shy, Please text us!
            </p>
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
