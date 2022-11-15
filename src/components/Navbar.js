import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  let nav = useNavigate();
  return (
    <>
      {/* <div className="btn-danger mb-2 p-1 text-white row mx-0 justify-content-between sticky-top/" > */}
      <div className="bg-danger m-0">
        <div
          className="col"
          style={{ cursor: "pointer" }}
          onClick={() => {
            nav("/");
            window.location.reload(false);
          }}
        >
          <h1 className="">MataPark</h1>
        </div>

        <div className="col">
          <h2
            className="col-2"
            style={{ cursor: "pointer" }}
            onClick={() => nav("/Login")}
          >
            Login
          </h2>
        </div>
      </div>
    </>
  );
}
