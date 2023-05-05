import Lottie from "lottie-react";
import register from "../../../assets/LottieAnimation/register.json";
import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const { registerUser, setProfile, googleRegister, githubRegister } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/recipe/1";

  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  
const handleGoogleLogin = () => {
  googleRegister()
    .then((result) => {
      console.log(result);
      navigate("/");
      navigate(from, { replace: true });
    })
    .catch((error) => {
      console.log(error);
    });
};
const handleGithubLogin = () => {
  githubRegister()
    .then((result) => {
      console.log(result);
      navigate("/");
      navigate(from, { replace: true });
    })
    .catch((error) => {
      console.log(error);
    });
};

  const handleRegister = (event) => {
    event.preventDefault();
    setErrorMessage('');
    if (password.length < 6) {
      setErrorMessage("Please provide at least 6 character password");
      return;
    } else if (!/^(?=.*[a-z])/.test(password)) {
      setErrorMessage("Please provide at least one lowercase letter");
      return;
    } else if (!/^(?=.*[A-Z])/.test(password)) {
      setErrorMessage("Please provide at least one uppercase letter");
      return;
    } else if (!/(?=.*\d.*\d)/.test(password)) {
      setErrorMessage("Please provide at least two number");
      return;
    } else if (!/(?=.*[!@#$%^&*()-_=+])/.test(password)) {
      setErrorMessage("Please provide at least one special character");
      return;
    } 
    registerUser(email, password)
      .then((result) => {
        console.log(result.user);
        setProfile(name, photoUrl)
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
        setName("");
        setPhotoUrl("");
        setEmail("");
        setPassword("");
        navigate("/");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
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
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
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
                    name="photoUrl"
                    value={photoUrl}
                    onChange={(e) => {
                      setPhotoUrl(e.target.value);
                    }}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPass ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder="password"
                      required
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
                  <p className="text-error">{errorMessage}</p>
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
                <button
                  onClick={handleGoogleLogin}
                  className="btn w-full btn-light text-lg space-x-3">
                  <FcGoogle />
                  <span>Continue with google</span>
                </button>
                <button onClick={handleGithubLogin} className="btn w-full btn-light text-lg space-x-3">
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
