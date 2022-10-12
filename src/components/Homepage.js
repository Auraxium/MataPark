import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Homepage() {
  let nav = useNavigate();
  return (
    <>
      <div className="row col-12">
        <button
          className="btn btn-primary"
          onClick={() => nav("/BuyDailyPass")}
        >
          Buy Daily Pass
        </button>
        <button className="btn btn-success">Extend Pass</button>
        <button className="btn btn-warning">Locate lot</button>
        <button className="btn btn-danger">Purchase Semester Pass</button>
        <div>asd</div>
      </div>
    </>
  );
}

export default Homepage;
