import React, { useEffect, useState } from "react";
import Adsidenav from "../component/Adsidenav";
import Topnav from "../component/Topnav";
import img03 from "../component/images/img03.jpg";
import "../component/Viewallcomquery.css"; // Import the CSS file

const Viewallcomquery = () => {
  const [penquery, setPenQuery] = useState([]);
  var [count, setCount] = useState(1);

  const getpenquery = async () => {
    const response = await fetch("https://karam-cqm.vercel.app/ad/allcomquery");
    const data = await response.json();
    if (data.msg === "Success") {
      setPenQuery(data.queries);
    }
  };

  useEffect(() => {
    getpenquery();
  }, []);

  // Inline styles for background image
  const containerStyle = {
    backgroundImage: `url(${img03})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div className="row vh-7">
        <div className="col-sm-12 bg-dark text-light">
          <Topnav />
        </div>
      </div>
      <div className="row vh-93">
        <div className="col-2 h-100 scroll bg-dark" style={containerStyle}>
          <Adsidenav />
        </div>
        <div className="col-10 h-100 scroll" style={containerStyle}>
          <div className="row h-100">
            <div className="col-md-6 table-responsive mx-auto p-2 my-auto rounded-4 shadow-lg">
              <table className="table glassy-table">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Department</th>
                    <th>Subject</th>
                    <th>Query</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {penquery?.map((e) => (
                    <tr key={e._id}>
                      <td>{count++}</td>
                      <td>{e.department}</td>
                      <td>{e.subject}</td>
                      <td>{e.description}</td>
                      <td className="btn btn-success text-dark">Completed</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Viewallcomquery;
