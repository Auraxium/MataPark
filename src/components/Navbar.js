import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  let nav = useNavigate();
  return (
    <>
      <div className="bg-danger mb-2 p-1 text-white row mx-0 justify-content-between align-items-center sticky-top/">
        <h1 className="col-auto" style={{"cursor": "pointer"}} onClick={() => {nav('/'); window.location.reload(false)}}>MataPark</h1>
        <h2 className="col-auto" style={{"cursor": "pointer"}} onClick={() => nav("/Login")}>Login</h2>
      </div>
    </>
  );
}
