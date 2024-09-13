import React, { useEffect, useState } from "react";
import Sidenav from "../component/Sidenav";
import { useParams } from "react-router-dom";
import Utopnav from "../component/Utopnav";

import img01 from "../component/images/img01.jpg";
import sideimg from "../component/images/sideimg.jpg";

const Dash = () => {
  const { id } = useParams();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const getUser = async () => {
    const response = await fetch(`http://localhost:8000/${id}`);
    const data = await response.json();
    if (response.ok) {
      setFirstname(data.firstname);
      setLastname(data.lastname);
      setEmail(data.email);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    const response = await fetch(`http://localhost:8000/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstname, lastname, email }),
    });

    if (response.ok) {
      setIsEditing(false);
      getUser();
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="row vh-7">
        <div className="col-sm-12 bg-dark text-light">
          <Utopnav />
        </div>
      </div>
      <div
        className="row vh-93"
        style={{
          backgroundImage: `url(${img01})`, // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="col-2 h-100 scroll"
          style={{
            background: "#1a1a1a",
            zIndex: 2,
            backgroundImage: `url(${sideimg})`,
            backgroundSize: "cover",
          }}
        >
          <Sidenav />
        </div>
        <div
          className="col-10 h-100 scroll"
          style={{
            background: "rgba(0, 0, 0, 0.1)",
            zIndex: 2,
          }}
        >
          <div className="row p-5">
            <div
              className="col-md-6 mx-auto p-4 rounded-5 my-auto"
              style={{
                background:
                  "linear-gradient(145deg, rgba(29, 29, 29, 0.8), rgba(0, 0, 0, 0.5))",
                backdropFilter: "blur(15px)",
                WebkitBackdropFilter: "blur(15px)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.37)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "#ffffff",
                textShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
              }}
            >
              {isEditing ? (
                <>
                  <h5 className="text-center" style={{ color: "#00ffff" }}>
                    Edit User Details
                  </h5>
                  <div className="mb-3">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid #00ffff",
                        color: "#ffffff",
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid #00ffff",
                        color: "#ffffff",
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid #00ffff",
                        color: "#ffffff",
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-success me-2"
                      onClick={handleSave}
                      style={{
                        backgroundColor: "#00ff7f",
                        borderColor: "#00ff7f",
                        color: "#000000",
                      }}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={handleCancel}
                      style={{
                        backgroundColor: "#ff4500",
                        borderColor: "#ff4500",
                        color: "#ffffff",
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h5 className="text-center" style={{ color: "#00ffff" }}>
                    User Details
                  </h5>
                  <div className="row my-3">
                    <div className="col-md-6">FirstName :</div>
                    <div className="col-md-6">{firstname}</div>
                  </div>
                  <div className="row my-3">
                    <div className="col-md-6">LastName :</div>
                    <div className="col-md-6">{lastname}</div>
                  </div>
                  <div className="row my-3">
                    <div className="col-md-6">Email :</div>
                    <div className="col-md-6">{email}</div>
                  </div>
                  <div className="row my-3">
                    <div className="col-md-6 mx-auto text-center">
                      <button
                        className="btn btn-warning"
                        onClick={handleEdit}
                        style={{
                          backgroundColor: "#ffa500",
                          borderColor: "#ffa500",
                          color: "#000000",
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dash;
