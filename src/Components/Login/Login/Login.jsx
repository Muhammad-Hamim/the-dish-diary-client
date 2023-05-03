import Lottie from "lottie-react";
import login from "../../../assets/LottieAnimation/login.json";
import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(true);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    setErrorMessage(null);
    setSuccessMessage(null);
    e.preventDefault();
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccessMessage("User logged in successfully!");
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col-reverse lg:flex-row">
          <div className="text-center lg:text-left">
            <Lottie animationData={login} loop={true} />
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="text-xl font-semibold card-title">Please Login</h2>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div class="relative">
                    <input
                      type={showPass ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder="password"
                      className="input input-bordered pr-12 w-full"
                    />
                    <label className="text-2xl absolute top-1/2 -translate-y-1/2 bottom-0 right-4 cursor-pointer">
                      {showPass ? (
                        <FaEyeSlash
                          onClick={() => {
                            setShowPass(!showPass);
                          }}
                        />
                      ) : (
                        <FaEye
                          onClick={() => {
                            setShowPass(!showPass);
                          }}
                        />
                      )}
                    </label>
                  </div>

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <label className="label-text-alt ">
                    Don't have an account?
                    <Link
                      to="/register"
                      className="link link-hover text-primary font-bold ml-1">
                      Register now!
                    </Link>
                  </label>
                  <p className="mt-4 text-error">{errorMessage}</p>
                  <p className="mt-4 text-success">{successMessage}</p>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Login
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

export default Login;
