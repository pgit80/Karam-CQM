import React, { useEffect, useState } from "react";
import Utopnav from "../component/Utopnav";
import Sidenav from "../component/Sidenav";
import { useParams } from "react-router-dom";

import proimg from "../component/images/processingimg.jpg";

const Viewproquery = () => {
  const { id } = useParams();
  const [proquery, setProquery] = useState([]);
  const getcomquery = async () => {
    try {
      const response = await fetch(`http://localhost:8000/getproquery/${id}`);
      const data = await response.json();
      if (data.msg === "Success") {
        setProquery(data.result);
      }
    } catch (error) {
      console.error("Failed to fetch pending queries:", error);
    }
  };

  useEffect(() => {
    getcomquery();
  }, []);

  return (
    <>
      <div className="row vh-7">
        <div className="col-sm-12 bg-dark text-light">
          <Utopnav />
        </div>
      </div>
      <div className="row vh-93">
        <div className="col-2 h-100 scroll bg-dark">
          <Sidenav />
        </div>
        <div
          className="col-10 h-100 scroll"
          style={{
            backgroundImage: `url(${proimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="col-md-8 table-responsive mx-auto p-4 rounded-4"
            style={{
              background: "rgba(0, 0, 50, 0.7)",
              backdropFilter: "blur(10px)",
              borderRadius: "10px",
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
              color: "white",
            }}
          >
            <table className="table " style={{ color: "white" }}>
              <thead style={{ background: "rgba(0, 0, 50, 0.9)" }}>
                <tr>
                  <th>Sr. No.</th>
                  <th>Department</th>
                  <th>Subject</th>
                  <th>Query</th>
                </tr>
              </thead>
              <tbody>
                {proquery.map((e, index) => (
                  <tr key={e._id}>
                    <td>{index + 1}</td>
                    <td>{e.department}</td>
                    <td>{e.subject}</td>
                    <td>{e.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Viewproquery;
