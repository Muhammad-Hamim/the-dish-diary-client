import Lottie from "lottie-react";
import register from "../../../assets/LottieAnimation/register.json";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col-reverse lg:flex-row">
          <div className="text-center lg:text-left">
            <Lottie animationData={register} loop={true} />
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="text-xl font-semibold card-title">
                Please Register
              </h2>
              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo url"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <p className="label-text-alt">
                    Already have an account?
                    <Link
                      to="/login"
                      className="link link-hover text-primary font-bold ml-1">
                      Login now!
                    </Link>
                  </p>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Register now
                  </button>
                </div>
              </form>

              <div className="flex w-full justify-between items-center my-10">
                <span className="border-t-[1px] border-slate-900 w-full"></span>
                <span className="w-fit px-5 text-xl uppercase font-medium">
                  or
                </span>
                <span className="border-t-[1px] border-slate-900 w-full"></span>
              </div>
              <div className="card-actions ">
                <button className="btn w-full btn-light text-lg space-x-3">
                  <FcGoogle />
                  <span>Continue with google</span>
                </button>
                <button className="btn w-full btn-light text-lg space-x-3">
                  <ImGithub />
                  <span>Continue with github</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
