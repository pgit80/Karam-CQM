import React, { useEffect, useState } from "react";
import Adsidenav from "../component/Adsidenav";
import { Link } from "react-router-dom";
import Topnav from "../component/Topnav";

import penimg from "../component/images/penimg.jpg";

const Viewallpenquery = () => {
  const [penquery, setPenQuery] = useState([]);
  const [count, setCount] = useState(1);
  let kuch;
  const getpenquery = async () => {
    const userno = await fetch("https://karam-cqm.onrender.com/");
    kuch = await userno.json();
    console.log(kuch[0]);

    try {
      const response = await fetch("https://karam-cqm.onrender.com/ad/allpenquery");
      const data = await response.json();
      if (data.msg === "Success") {
        setPenQuery(data.queries || []); // Ensure the fallback to an empty array if undefined
      } else {
        console.error("Failed to fetch pending queries");
      }
    } catch (error) {
      console.error("Error fetching pending queries:", error);
    }
  };

  const process = async (id) => {
    try {
      const status = { status: "processing" };
      const response = await fetch(`https://karam-cqm.onrender.com/status/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(status),
      });
      const data = await response.json();
      if (data.msg === "Success") {
        alert("Query is now being processed");
        getpenquery();
      } else {
        alert("Error updating query status");
      }
    } catch (error) {
      console.error("Error processing query:", error);
    }
  };

  useEffect(() => {
    getpenquery();
  }, []);

  const tableStyle = {
    background: "rgba(0, 0, 0, 0.5)", // Adjust transparency level here
    borderRadius: "10px",
    backdropFilter: "blur(10px)", // Add a blur effect to enhance the glassy look
    color: "#ffffff", // Ensure the text is readable
  };

  const headerStyle = {
    background: "rgba(0, 0, 0, 0.7)", // Slightly darker background for headers
  };

  const cellStyle = {
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // Light border for better readability
  };

  return (
    <>
      <div className="row vh-7">
        <div className="col-sm-12 bg-dark text-light">
          <Topnav />
        </div>
      </div>
      <div className="row vh-93">
        <div
          className="col-2 h-100 scroll bg-dark"
          style={{ backgroundImage: `url(${penimg})` }}
        >
          <Adsidenav />
        </div>
        <div
          className="col-10 h-100 scroll"
          style={{ backgroundImage: `url(${penimg})` }}
        >
          <div className="row h-100">
            <div className="col-md-6 table-responsive mx-auto p-2 my-auto rounded-4 shadow-lg">
              <table className="table table-dark" style={tableStyle}>
                <thead>
                  <tr style={headerStyle}>
                    <th>Sr. No.</th>
                    <th>Query By</th>
                    <th>Department</th>
                    <th>Subject</th>
                    <th>Query</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {penquery.length > 0 ? (
                    penquery.map((e, index) => (
                      <tr key={e._id}>
                        <td>{index + 1}</td>
                        <td>{`${e.user}`}</td>
                        <td>{e.department}</td>
                        <td>{e.subject}</td>
                        <td>{e.description}</td>
                        <td>
                          <button
                            onClick={() => process(e._id)}
                            className="btn btn-primary"
                          >
                            Process Query
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center">
                        No pending queries found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Viewallpenquery;
