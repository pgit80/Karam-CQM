import React, { useState } from "react";
import Sidenav from "../component/Sidenav";
import { useParams } from "react-router-dom";
import Utopnav from "../component/Utopnav";

import addqueryimg from "../component/images/addqueryimg.jpg";

const AddQuery = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const adduserquery = async (e) => {
    e.preventDefault();

    const status = "pending";
    const query = {
      uid: id,
      department,
      subject,
      description,
      status,
    };

    const response = await fetch("https://karam-cqm.onrender.com/addquery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    });

    const data = await response.json();

    if (data.msg === "Query Added") {
      alert("Query Added");
      setDepartment("");
      setDescription("");
      setSubject("");
    } else {
      alert("Something Went Wrong");
    }
  };

  return (
    <>
      <div className="row vh-7">
        <div className="col-sm-12 bg-dark text-light">
          <Utopnav />
        </div>
      </div>
      <div className="row vh-93">
        <div className="col-2 h-100 bg-dark">
          <Sidenav />
        </div>
        <div
          className="col-10 h-100"
          style={{
            backgroundImage: `url(${addqueryimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="col-md-6">
            <form
              onSubmit={adduserquery}
              className="p-5 rounded-5"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "white",
              }}
            >
              <h4 className="text-center mb-4">Add Query</h4>
              <div className="mb-3">
                <label htmlFor="department" className="form-label">
                  Select Department
                </label>
                <select
                  id="department"
                  className="form-control"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value="1">Select Department</option>
                  <option value={"IT"}>IT</option>
                  <option value={"Accounts"}>Accounts</option>
                  <option value={"Management"}>Management</option>
                  <option value={"Sales"}>Sales</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Enter Your Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="form-control"
                  placeholder="Enter Your Subject"
                />
              </div>
              <div className="mb-4 ">
                <label htmlFor="description" className="form-label">
                  Description in Details
                </label>
                <textarea
                  id="description"
                  className="form-control"
                  rows="5"
                  placeholder="Describe in Details"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <input
                type="submit"
                value={"Add Query"}
                className="form-control btn btn-primary"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddQuery;
