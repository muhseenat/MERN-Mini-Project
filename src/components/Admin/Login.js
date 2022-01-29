import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("adminToken");
    if (loggedIn) {
      navigate("/admindashboard");
      return false;
    }
  }, []);

  async function loginAdmin(e) {
    e.preventDefault();

    try {
      const loginData = { email, password };

      await axios
        .post("http://localhost:1337/admin/login", loginData)
        .then((res) => {
          localStorage.setItem("adminToken", res.data.adminToken);
          navigate("/admindashboard");
        });
    } catch (error) {
      console.log(error);

      setLoginError(error.response?.data.errorMessage);
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        className="w-full md:w-1/3 bg-white rounded-lg"
        onSubmit={loginAdmin}
      >
        <div className="flex font-bold justify-center mt-6">
          <img
            className="h-20 w-20"
            src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg"
          />
        </div>
        <h2 className="text-3xl text-center text-gray-700 mb-4">
          {" "}
          Admin Login
        </h2>
        <div className="px-12 pb-10">
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="-mx-6  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
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
                className="-mx-6 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          {/* <a href="#" className="text-xs text-gray-500 float-right mb-4">Forgot Password?</a> */}
          <p className="text-red-400">{loginError}</p>
          <button
            type="submit"
            className="w-full py-2 rounded-full bg-green-600 text-gray-100  focus:outline-none"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
