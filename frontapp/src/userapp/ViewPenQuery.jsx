import React, { useEffect, useState } from "react";
import Sidenav from "../component/Sidenav";
import { useParams } from "react-router-dom";
import EditQuery from "./EditQuery"; // Import the new component
import Utopnav from "../component/Utopnav";

import img2 from "../component/images/img02.jpg"; // Background image import

const ViewPenQuery = () => {
  const { id } = useParams();
  const [penquery, setPenQuery] = useState([]);
  const [editQueryId, setEditQueryId] = useState(null); // State to track the query being edited
  const [editData, setEditData] = useState(null); // State to hold the data of the query being edited

  const getpenquery = async () => {
    try {
      const response = await fetch(`https://karam-cqm.vercel.app/getpenquery/${id}`);
      const data = await response.json();
      if (data.msg === "Success") {
        setPenQuery(data.result);
      }
    } catch (error) {
      console.error("Failed to fetch pending queries:", error);
    }
  };

  const handleEditClick = (query) => {
    setEditQueryId(query._id);
    setEditData(query); // Store the data of the query being edited
  };

  const handleCancel = () => {
    setEditQueryId(null); // Exit edit mode
    setEditData(null);
  };

  const handleSave = () => {
    setEditQueryId(null);
    setEditData(null);
    getpenquery(); // Refresh the query list after saving
  };

  useEffect(() => {
    getpenquery();
  }, []); // Dependency array ensures this only runs once on mount

  return (
    <div
      className="main-container"
      style={{
        backgroundImage: `url(${img2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="row vh-7">
        <div className="col-sm-12 bg-dark text-light">
          <Utopnav />
        </div>
      </div>
      <div className="row vh-93">
        <div className="col-2 h-100 scroll">
          <Sidenav />
        </div>
        <div className="col-10 h-100 scroll ">
          <div className="row h-100">
            <div
              className="col-md-6 table-responsive mx-auto p-2 my-auto rounded-4 shadow-lg"
              style={{
                background:
                  "rgba(0, 0, 0, 0.6)" /* Semi-transparent background */,
                backdropFilter: "blur(10px)" /* Blur effect */,
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              {editQueryId ? (
                // Render the EditQuery component if in edit mode
                <div
                  className="bg-transparent"
                  style={{
                    background:
                      "linear-gradient(rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.2))" /* Transparent gradient background */,
                    backdropFilter: "blur(10px)" /* Glass effect */,
                    borderRadius: "10px",
                    padding: "20px",
                    boxShadow:
                      "0 4px 8px rgba(0, 0, 0, 0.2)" /* Shadow for better visibility */,
                    maxWidth: "600px" /* Set a max width for the form */,
                    margin: "0 auto" /* Center the form */,
                  }}
                >
                  <EditQuery
                    queryId={editQueryId}
                    initialData={editData}
                    onCancel={handleCancel}
                    onSave={handleSave}
                  />
                </div>
              ) : (
                // Render the query table if not in edit mode
                <table
                  className="table table-dark bg-transparent"
                  style={{
                    background:
                      "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.2))" /* Transparent gradient background */,
                    borderRadius: "10px",
                    overflow:
                      "hidden" /* Ensure the gradient does not spill out */,
                    borderCollapse:
                      "separate" /* Avoids collapsing borders that may affect appearance */,
                    boxShadow:
                      "0 4px 8px rgba(0, 0, 0, 0.1)" /* Adds subtle shadow for better visibility */,
                  }}
                >
                  <thead>
                    <tr style={{ backgroundColor: "#f8f9fa" }}>
                      {" "}
                      {/* Header row styling */}
                      <th style={{ padding: "10px", textAlign: "left" }}>
                        Sr. No.
                      </th>
                      <th style={{ padding: "10px", textAlign: "left" }}>
                        Department
                      </th>
                      <th style={{ padding: "10px", textAlign: "left" }}>
                        Subject
                      </th>
                      <th style={{ padding: "10px", textAlign: "left" }}>
                        Query
                      </th>
                      <th style={{ padding: "10px", textAlign: "left" }}>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {penquery.map((e, index) => (
                      <tr
                        key={e._id}
                        style={{
                          backgroundColor:
                            index % 2 === 0 ? "#ffffff" : "#f2f2f2",
                        }}
                      >
                        {" "}
                        {/* Alternating row colors */}
                        <td style={{ padding: "10px", textAlign: "left" }}>
                          {index + 1}
                        </td>
                        <td style={{ padding: "10px", textAlign: "left" }}>
                          {e.department}
                        </td>
                        <td style={{ padding: "10px", textAlign: "left" }}>
                          {e.subject}
                        </td>
                        <td style={{ padding: "10px", textAlign: "left" }}>
                          {e.description}
                        </td>
                        <td style={{ padding: "10px", textAlign: "left" }}>
                          <button
                            className="btn btn-primary"
                            onClick={() => handleEditClick(e)}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPenQuery;
