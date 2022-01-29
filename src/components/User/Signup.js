import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [signupError, setSignupError] = useState("");
  const navigate = useNavigate();

  //checking if user is logged in or not
  useEffect(() => {
    const loggedIn = localStorage.getItem("token");

    if (loggedIn) {
      navigate("/");
      return false;
    }
  }, []);

  async function registerUser(e) {
    e.preventDefault();
    try {
      const registerData = { name, email, password, passwordVerify };
      await axios
        .post("http://localhost:1337/register", registerData)
        .then((res) => {
          console.log(res.data);
          const username = res.data.savedUser.name;

          const token = res.data.token;
          localStorage.setItem("name", username);
          localStorage.setItem("token", token);
          navigate("/");
        });
    } catch (error) {
      console.log(error);

      setSignupError(error.response?.data.errorMessage);
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        className="w-full md:w-1/3 bg-white rounded-lg"
        onSubmit={registerUser}
      >
        <div className="flex font-bold justify-center mt-6">
          <img
            className="h-20 w-20"
            src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg"
          />
        </div>
        <h2 className="text-3xl text-center text-gray-700 mb-4">Register</h2>
        <div className="px-12 pb-10">
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                name="email"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="-mx-6  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="-mx-6   w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="-mx-6  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"></i>
              <input
                type="password"
                placeholder=" Confirm Password"
                name="passwordVerify"
                value={passwordVerify}
                onChange={(e) => setPasswordVerify(e.target.value)}
                className="-mx-6  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          {/* <a href="#" className="text-xs text-gray-500 float-right mb-4">Forgot Password?</a> */}
          <p className="text-red-400">{signupError}</p>
          <button
            type="submit"
            className="w-full py-2 rounded-full bg-green-600 text-gray-100  focus:outline-none"
          >
            Signup
          </button>
          <p className="text-1xl text-center text-gray-700 mb-4 mt-4">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
