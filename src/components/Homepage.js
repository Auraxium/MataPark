import React from "react";
import { Link, useNavigate } from 'react-router-dom';

var port = "http://localhost:8080";



function Homepage() {
  let nav = useNavigate();
  return (
    <>
      <button className="btn btn-primary" onClick={() => nav('/BuyDailyPass')}>Buy Daily Pass</button>
      <button className="btn btn-success">Extend Pass</button>
      <button className="btn btn-warning">Locate lot</button>
      <button className="btn btn-danger">Purchase Semester Pass</button>

      <div className="row col-10 border">
        <div className="row">
          <div className="col-6 border">

          </div>
          <div className="col-6 border">

          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
