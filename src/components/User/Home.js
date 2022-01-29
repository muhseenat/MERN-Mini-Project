import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const username = localStorage.getItem("name");
    setUsername(username);
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return false; 
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid place-items-center h-screen">
        <p
          className="font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 
          Liberation Mono, Courier New, monospace; text-2xl"
        >
          Welcome {username}
        </p>
      </div>
    </>
  );
}

export default Home;
