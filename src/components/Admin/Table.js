import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Table() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin");
      return false;
    }
    getData();
  }, []);

  const getData = async () => {
    const result = await axios.get("http://localhost:1337/admin/fetchdata");
    console.log("HAi Dracu");
    console.log(result);
    setUsers(result.data.resp);
  };
  const deleteUser = async (userId) => {
    if (window.confirm("Are you sure ?")) {
      const newData = await axios.get(
        "http://localhost:1337/admin/delete/" + userId
      );

      if (newData.data.resp) {
        setUsers((prev) => {
          return prev.filter((user) => user._id !== userId);
        });
      }
    }
  };

  return (
    <>
      <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
        <div className="flex flex-col justify-center h-full">
          <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Users</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Sl.No</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Name</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Email</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Action</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {users.map((user, index) => (
                      <tr>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="font-medium text-gray-800">
                              {++index}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{user.name}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{user.email}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <td>
                            <button className="bg-green-500 p-2 text-white hover:shadow-lg text-xs font-thin mr-3">
                              {" "}
                              <Link to={`/edituser/${user._id}`}>
                                Edit
                              </Link>{" "}
                            </button>
                            <button
                              onClick={() => {
                                deleteUser(user._id);
                              }}
                              className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin"
                            >
                              Delete
                            </button>
                          </td>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Table;
