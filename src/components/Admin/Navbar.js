import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const adminLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-green-600 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">SAMP</span>
        </div>

        <label
          className="lg:hidden cursor-pointer flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          for="menu-toggle"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden w-full flex-grow lg:flex lg:items-center lg:w-auto"
          id="menu"
        >
          <div className="text-sm lg:flex-grow">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              <Link to={"/admindashboard"}> Home</Link>
            </a>
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              <Link to={"/adduser"}> Add User</Link>
            </a>
          </div>
          <div class="flex items-center justify-center mr-2">
            <div class="flex border-2 rounded">
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                type="text"
                class="px-4 py-2 w-80"
                placeholder="Search..."
              />
              <Link
                to={`/admindashboard/name/${
                  search.length == 0 ? "nofilter" : search
                }`}
              >
                
                <a class="flex items-center justify-center px-4 border-l">
                  <svg
                    class="w-6 h-6 text-gray-600"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                  </svg>
                </a>
              </Link>
            </div>
          </div>

          <div className="block">
            <a
              onClick={adminLogout}
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Logout
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
