import React from "react";
import { Link } from "react-router-dom";
const Utopnav = () => {
  return (
    <div>
      <div className="row">
        <div className="col-1 my-auto">User App</div>
        <div className="col-2 my-auto ms-auto">
          <Link to={"/login"} className="nav-link">
            <i className="fa-solid fa-right-from-bracket"></i>Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Utopnav;
