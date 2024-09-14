import React, { useEffect, useState } from "react";
import Adsidenav from "../component/Adsidenav";
import Topnav from "../component/Topnav";

import addashimg from "../component/images/addash.jpg";

const Addash = () => {
  const [u, setU] = useState(0);
  const [q, setQ] = useState(0);
  const [pen, setPen] = useState(0);
  const [pro, setPro] = useState(0);
  const [com, setCom] = useState(0);

  const total = async () => {
    try {
      const uresponse = await fetch("https://karam-cqm.vercel.app/");
      const ures = await uresponse.json();
      setU(ures.length);

      const qresponse = await fetch("https://karam-cqm.vercel.app/getquery");
      const qres = await qresponse.json();
      setQ(qres.length);

      const penresponse = await fetch("https://karam-cqm.vercel.app/ad/allpenquery");
      const penres = await penresponse.json();
      setPen(penres.queries.length || 0);

      const proresponse = await fetch("https://karam-cqm.vercel.app/ad/allproquery");
      const prores = await proresponse.json();
      setPro(prores.queries.length || 0);

      const comresponse = await fetch("https://karam-cqm.vercel.app/ad/allcomquery");
      const comres = await comresponse.json();
      setCom(comres.queries.length || 0);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    total();
  }, []);

  return (
    <>
      <div className="row vh-7">
        <div className="col-sm-12 bg-dark text-light">
          <Topnav />
        </div>
      </div>
      <div className="row vh-93">
        <div className="col-2 h-100 scroll bg-dark">
          <Adsidenav />
        </div>
        <div
          className="col-10 h-100 scroll"
          style={{ backgroundImage: `url(${addashimg})` }}
        >
          <div className="row h-100">
            <div className="col-md-11 mx-auto my-auto">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {[u, q, pen, pro, com].map((value, index) => (
                  <div key={index} className="col mx-auto">
                    <div
                      className="card h-100 glass-card"
                      style={{
                        backgroundColor: "rgba(0, 255, 100, 0.1)",
                        borderRadius: "15px",
                        backdropFilter: "blur(10px)",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <div className="card-body text-center text-light">
                        <h5 className="card-title">
                          {
                            [
                              "Total Users",
                              "Total Queries",
                              "Total Pending Queries",
                              "Total Processing Queries",
                              "Total Completed Queries",
                            ][index]
                          }
                        </h5>
                        <p className="card-text">{value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS directly */}
      <style jsx="true">{`
        .glass-card {
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }

        .glass-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          background-color: rgba(255, 255, 255, 0.5);
        }

        .card-title {
          font-size: 1.5rem;
        }

        .card-text {
          font-size: 1.25rem;
        }
      `}</style>
    </>
  );
};

export default Addash;
