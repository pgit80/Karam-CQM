import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link, useNavigate } from "react-router-dom";

import loginimg from "../component/images/login01.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const logcode = async (e) => {
    e.preventDefault();
    const user = { email, password };
    const response = await fetch("https://karam-cqm.vercel.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log(data);
    if (data.msg === "Login Success") {
      alert("Login Success");
      console.log(data.id);
      setEmail("");
      setPassword("");
      navigate(`/userdash/${data.id}`);
    } else {
      alert(data.msg);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="row"
        style={{
          backgroundImage: `url(${loginimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh", // Make sure the background covers the whole viewport
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="col-md-6 mx-auto p-5 shadow-lg rounded-5"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent background
            backdropFilter: "blur(10px)", // Apply blur effect
            borderRadius: "15px", // Rounded corners
            padding: "30px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth
          }}
        >
          <form onSubmit={logcode} className="text-light">
            <h4>
              <span className="text-danger text-decoration-underline">
                Login
              </span>{" "}
              Form
            </h4>
            Enter Your Email :
            <input
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              required
            />
            <br />
            Enter Your Password :
            <input
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password" // Changed to "password" to hide input
              name="password"
              required
            />
            <br />
            <button className="mb-3 form-control btn btn-primary" type="submit">
              Submit
            </button>
            <Link to={"/registration"} className="text-light">
              New User? Create New Account
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
