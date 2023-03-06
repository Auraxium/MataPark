import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Clock from "react-live-clock";

export default function Navbar() {
  let nav = useNavigate();
  return (
    <>
      <div
        className="bg-danger mb-2 p-1 row text-white mx-0 align-items-center sticky-top"
      >
        <div className="col row">
          <h1
            className="col-auto"
            style={{ cursor: "pointer" }}
            onClick={() => {
              nav("/");
            }}
          >
            MataPark
          </h1>
        </div>

        <Clock
          className="col text-center"
          format={"h:mm:ss A"}
          ticking={true}
          timezone={"US/Pacific"}
          style={{ fontSize: "1.5em" }}
        />

        <div className="col row justify-content-end">
          <h2
            className="col-auto"
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
