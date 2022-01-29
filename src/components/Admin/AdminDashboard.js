import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Table from "./Table";

function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin");
      return false;
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Table />
    </div>
  );
}

export default AdminDashboard;
