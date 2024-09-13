import React from "react";
import { Link } from "react-router-dom";

const Adsidenav = () => {
  return (
    <div
      className="row h-100 glassy-sidenav"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: "10px",
        backdropFilter: "blur(10px)",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="col-sm-12 text-light">
        <Link className="nav-link my-3 ps-3" to={`/addash`}>
          <i className="fa fa-book"></i> Dashboard
        </Link>
        <Link className="nav-link my-3 ps-3" to={`/viewalluser`}>
          <i className="fa fa-user"></i> View All Users
        </Link>
        <Link className="nav-link my-3 ps-3" to={`/viewallpenquery`}>
          <i className="fa fa-eye"></i> View Pending Query
        </Link>
        <Link className="nav-link my-3 ps-3" to={`/viewallproquery`}>
          <i className="fa fa-eye"></i> View Processing Query
        </Link>
        <Link className="nav-link my-3 ps-3" to={`/viewallcomquery`}>
          <i className="fa fa-eye"></i> View Completed Query
        </Link>
      </div>

      {/* Add CSS directly */}
      <style jsx="true">{`
        .glassy-sidenav {
          transition: background-color 0.3s ease-in-out;
        }

        .glassy-sidenav:hover {
          background-color: rgba(0, 0, 0, 0.6);
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.2rem;
          transition: color 0.3s ease-in-out;
        }

        .nav-link:hover {
          color: rgba(255, 255, 255, 1);
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
        }

        .nav-link i {
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
};

export default Adsidenav;
