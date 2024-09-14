import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link, useNavigate } from "react-router-dom";

import img from "../component/images/processingimg.jpg";

const Registration = () => {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const regcode = async (e) => {
    e.preventDefault();
    const user = { firstname, lastname, email, password };
    const response = await fetch("https://karam-cqm.vercel.app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const result = await response.json();
    if (result.msg === "Success") {
      alert("Registration Success");
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } else {
      alert("Registration Failed");
    }
  };

  return (
    <>
      <Navbar />

      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(${img})`, // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="col-md-6 mx-auto p-5 shadow-lg my-5 rounded-5"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark transparent background
            borderRadius: "15px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
            color: "white", // Ensures text is readable on dark background
          }}
        >
          <form onSubmit={regcode}>
            <h4 className="text-center mb-4">
              <span className="text-light text-decoration-underline">
                Registration
              </span>{" "}
              Form
            </h4>
            <div className="mb-3">
              <label>Enter Your First Name:</label>
              <input
                className="form-control"
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                type="text"
                name="firstName"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                }}
                required
              />
            </div>
            <div className="mb-3">
              <label>Enter Your Last Name:</label>
              <input
                className="form-control"
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                type="text"
                name="lastName"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                }}
                required
              />
            </div>
            <div className="mb-3">
              <label>Enter Your Email:</label>
              <input
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                }}
                required
              />
            </div>
            <div className="mb-3">
              <label>Enter Your Password:</label>
              <input
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                }}
                required
              />
            </div>
            <button className="form-control btn btn-primary mb-3" type="submit">
              Submit
            </button>
            <div className="text-center">
              <Link to={"/login"} style={{ color: "#ccc" }}>
                Already Have An Account? Log In
              </Link>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Registration;
