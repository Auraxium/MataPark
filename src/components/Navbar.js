import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Clock from "react-live-clock";
import axios from "axios";
import port from "../port";
import $ from "jquery";

export default function Navbar() {
  let nav = useNavigate();
  return (
    <div className="bg-danger mb-2 p-1 row d-flex text-white align-items-center sticky-top" style={{ margin: 0, padding: 0, width: "100vw" }}>
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

      <Clock className="col text-center" format={"h:mm:ss A"} ticking={true} timezone={"US/Pacific"} style={{ fontSize: "1.5em" }} />

      <div className="col row justify-content-end  mx-0">
        <h2
          className="col-auto nav-names"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (!localStorage.getItem("googToken")) {
              let uuid = crypto.randomUUID();
              localStorage.setItem("googUUID", uuid);
              axios
                .post(port + "/googOauth", { uuid: uuid, origin: window.location.origin })
                .then((ax) => (window.location.href = ax.data.url))
                .catch(console.log);
            } else {
              localStorage.removeItem("googToken");
              $(".nav-names").html("Logged out");
            }
          }}
        >
          Login
        </h2>
      </div>
    </div>
  );
}
