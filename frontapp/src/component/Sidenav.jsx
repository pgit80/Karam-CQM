import React from "react";
import { Link, useParams } from "react-router-dom";

const Sidenav = () => {
  const { id } = useParams();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "20px",
        background: "rgba(20, 20, 20, 0.8)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderRadius: "15px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <div style={{ color: "white", fontWeight: "bold" }}>
        <Link
          to={`/userdash/${id}`}
          style={{
            display: "block",
            color: "white",
            fontWeight: "bold",
            padding: "10px 15px",
            borderRadius: "10px",
            transition: "background 0.3s ease, transform 0.3s ease",
            textShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
            margin: "10px 0",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.2)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "none";
            e.target.style.transform = "none";
          }}
        >
          <i className="fa fa-book"></i> Dashboard
        </Link>

        <Link
          to={`/addquery/${id}`}
          style={{
            display: "block",
            color: "white",
            fontWeight: "bold",
            padding: "10px 15px",
            borderRadius: "10px",
            transition: "background 0.3s ease, transform 0.3s ease",
            textShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
            margin: "10px 0",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.2)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "none";
            e.target.style.transform = "none";
          }}
        >
          <i className="fa fa-question"></i> Add Query
        </Link>

        <Link
          to={`/viewPenQuery/${id}`}
          style={{
            display: "block",
            color: "white",
            fontWeight: "bold",
            padding: "10px 15px",
            borderRadius: "10px",
            transition: "background 0.3s ease, transform 0.3s ease",
            textShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
            margin: "10px 0",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.2)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "none";
            e.target.style.transform = "none";
          }}
        >
          <i className="fa fa-eye"></i> View Pending Query
        </Link>

        <Link
          to={`/viewProQuery/${id}`}
          style={{
            display: "block",
            color: "white",
            fontWeight: "bold",
            padding: "10px 15px",
            borderRadius: "10px",
            transition: "background 0.3s ease, transform 0.3s ease",
            textShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
            margin: "10px 0",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.2)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "none";
            e.target.style.transform = "none";
          }}
        >
          <i className="fa fa-eye"></i> View Processing Query
        </Link>

        <Link
          to={`/viewComQuery/${id}`}
          style={{
            display: "block",
            color: "white",
            fontWeight: "bold",
            padding: "10px 15px",
            borderRadius: "10px",
            transition: "background 0.3s ease, transform 0.3s ease",
            textShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
            margin: "10px 0",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.2)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "none";
            e.target.style.transform = "none";
          }}
        >
          <i className="fa fa-eye"></i> View Completed Query
        </Link>
      </div>
    </div>
  );
};

export default Sidenav;
