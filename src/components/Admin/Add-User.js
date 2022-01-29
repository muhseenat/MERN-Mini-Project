import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Add_User() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin");
      return false;
    }
  }, []);

  function adduser(e) {
    e.preventDefault();
    const newUser = { name, email, password };
    axios.post("http://localhost:1337/admin/adduser", newUser).then(() => {
      setEmail("");
      setName("");
      setPassword("");
      navigate("/admindashboard");
    });
  }

  return (
    <>
      <Navbar />

      <div class="container mx-auto p-2">
        <div class="max-w-sm mx-auto my-24 bg-white px-5 py-10 rounded shadow-xl">
          <div class="text-center mb-8">
            <h1 class="font-bold text-2xl">Add User</h1>
          </div>
          <form action="#">
            <div class="mt-5">
              <label for="username">Username </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="username"
                class="block w-full p-2 border rounded border-gray-500"
              />
            </div>
            <div class="mt-5">
              <label for="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                class="block w-full p-2 border rounded border-gray-500"
              />
            </div>
            <div class="mt-5">
              <label for="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                class="block w-full p-2 border rounded border-gray-500"
              />
            </div>
            <div class="mt-10">
              <input
                onClick={adduser}
                type="submit"
                value="Add"
                class="py-3 bg-green-500 hover:bg-green-600 rounded text-white text-center w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Add_User;
