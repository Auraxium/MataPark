import React from "react";
import { Link, useNavigate } from "react-router-dom";


function Homepage() {
  let nav = useNavigate();
  return (
    <>
      <div className="row gy-1 ">
        <button
          className="btn btn-secondary"
          onClick={() => nav("/BuyDailyPass")}
        >
          Buy Daily Pass
        </button>
        <button className="btn btn-secondary">Extend Pass</button>
        <button className="btn btn-secondary">Locate lot</button>
        <button className="btn btn-secondary">Purchase Semester Pass</button>
        <button className="btn btn-secondary" onClick={()=> nav("/Calculate")}> Calculate (Semester vs Day to Day)</button>
        <div>asd</div>
      </div>
    </>
  );
}

export default Homepage;
