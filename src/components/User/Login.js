import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logginError, setLogginError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("token");
    
    if (loggedIn) {
      navigate("/");
      return false;
    }
  }, []);

  async function loginUser(e) {
    e.preventDefault();
    try {
      const loginData = { email, password };

      await axios.post("http://localhost:1337/login", loginData).then((res) => {
        console.log(res.data);
        localStorage.setItem('name',res.data.isUser.name)
        localStorage.setItem("token", res.data.token);
        navigate("/");
      });
    } catch (error) {
      console.log("error in catch");

      setLogginError(error.response?.data.errorMessage);
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        className="w-full md:w-1/3 bg-white rounded-lg"
        onSubmit={loginUser}
      >
        <div className="flex font-bold justify-center mt-6">
          <img
            className="h-20 w-20"
            src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg"
          />
        </div>
        <h2 className="text-3xl text-center text-gray-700 mb-4">Login</h2>
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
                className="-mx-6 px-8  w-full border rounded  py-2 text-gray-700 focus:outline-none"
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
                className="-mx-6 px-8 w-full border rounded py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          {/* <a href="#" className="text-xs text-gray-500 float-right mb-4">Forgot Password?</a> */}
          <p className="text-red-400">{logginError}</p>
          <button
            type="submit"
            className="w-full py-2 rounded-full bg-green-600 text-gray-100  focus:outline-none"
          >
            Login
          </button>
          <p className="text-1xl text-center text-gray-700 mb-4 mt-4">
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
