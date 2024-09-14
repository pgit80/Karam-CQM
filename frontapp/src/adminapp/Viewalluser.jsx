import React, { useEffect, useState } from "react";
import Adsidenav from "../component/Adsidenav";
import Topnav from "../component/Topnav";

import viewalluserimg from "../component/images/viewalluserimg.jpg";

const Viewalluser = () => {
  const [user, setUser] = useState([]);
  const [count, setCount] = useState(1); // Changed var to const for consistency

  const getuser = async () => {
    try {
      const response = await fetch("https://karam-cqm.vercel.app/");
      const data = await response.json();
      if (data) {
        setUser(data);
      }
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  useEffect(() => {
    getuser();
  }, []);

  return (
    <>
      <div className="row vh-7">
        <div className="col-sm-12 bg-dark text-light">
          <Topnav />
        </div>
      </div>
      <div className="row vh-93">
        <div className="col-2 h-100 scroll">
          <Adsidenav />
        </div>
        <div
          className="col-10 h-100 scroll"
          style={{
            backgroundImage: `url(${viewalluserimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="row h-100 d-flex align-items-center">
            <div
              className="col-md-8 table-responsive mx-auto p-4 my-auto rounded-4 shadow-lg glassy-table"
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "15px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <table
                className="table table-light text-light glassy-table rounded-10"
                style={{
                  backdropFilter: "blur(10px)",
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                }}
              >
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((e, index) => (
                    <tr key={index}>
                      <td>{count}</td>
                      <td>{e.firstname}</td>
                      <td>{e.lastname}</td>
                      <td>{e.email}</td>
                      <td>
                        <button className="btn btn-primary">
                          <i className="fa fa-edit"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS for additional styles */}
      <style jsx="true">{`
        .glassy-table {
          transition: background-color 0.3s ease-in-out;
        }

        .table th,
        .table td {
          vertical-align: middle;
        }

        .btn-primary {
          background-color: rgba(0, 123, 255, 0.8);
          border-color: rgba(0, 123, 255, 0.8);
        }

        .btn-primary:hover {
          background-color: rgba(0, 123, 255, 1);
          border-color: rgba(0, 123, 255, 1);
        }
      `}</style>
    </>
  );
};

export default Viewalluser;
