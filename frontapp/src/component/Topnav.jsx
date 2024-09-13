import React from "react";
import { Link } from "react-router-dom";
const Topnav = () => {
  return (
    <div>
      <div className="row h-100">
        <div className="col-2 my-auto">
          <h6>Admin Zone</h6>
        </div>
        <div className="col-2 my-auto ms-auto">
          <h6>
            <Link to={"/adlogin"} className="nav-link">
              <i className="fa-solid fa-right-from-bracket"></i>Logout
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
