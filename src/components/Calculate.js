import React from 'react';
import ParkingInfo from "./ParkingInfo";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";



const MiddleContent = () => (
  <div className="col-7 text-center ">
    <div className="" style={{ fontSize: "27px" }}>
      <h1>Calculator</h1>
    </div>
    
    <p className="mt-4">
      Figure out whether it is better to buy daily pass or 
      semester pass according to your schedule
    </p>
<form>
<div class="form-group">
    <label for="exampleFormControlSelect1">Monday</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1hr</option>
      <option>2hr</option>
      <option>2-4hr</option>
      <option>4+hr</option>
    </select>
  </div>

  <div class="form-group">
    <label for="exampleFormControlSelect1">Tuesday</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1hr</option>
      <option>2hr</option>
      <option>2-4hr</option>
      <option>4+hr</option>
    </select>
  </div>

  <div class="form-group">
    <label for="exampleFormControlSelect1">Wednesday</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1hr</option>
      <option>2hr</option>
      <option>2-4hr</option>
      <option>4+hr</option>
    </select>
  </div>

  <div class="form-group">
    <label for="exampleFormControlSelect1">Thursday</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1hr</option>
      <option>2hr</option>
      <option>2-4hr</option>
      <option>4+hr</option>
    </select>
  </div>

  <div class="form-group">
    <label for="exampleFormControlSelect1">Friday</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1hr</option>
      <option>2hr</option>
      <option>2-4hr</option>
      <option>4+hr</option>
    </select>
  </div>

  <div class="form-group">
    <label for="exampleFormControlSelect1">Saturday</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1hr</option>
      <option>2hr</option>
      <option>2-4hr</option>
      <option>4+hr</option>
    </select>
  </div>

</form>
    

  </div>
);
function Calculate() {
  let nav = useNavigate();
  var [main, SetMain] = useState(MiddleContent);
  return (
    <div className="container px-2">
      <div className="row text-center text-white bg-black tab-header">
        <div className="col-3 py-4" onClick={() => SetMain(ParkingInfo)}>
          Parking Information
        </div>
        <div className="col-3 py-4" onClick={() => nav("/Calculate")}>
          Permit Calculator
        </div>
        <div className="col-3 py-4">Parking Availability</div>
        <div className="col-3 py-4">Accessibility</div>
      </div>

      <div className="row">
        <div className="col grey">
          <div className="mb-1 font-big h2">Contact Us</div>
          <p className="">
            {`Parking and Transportation Services
              © California State University, Northridge
              18111 Nordhoff Street, Northridge, CA 91330
              Phone: (818) 677-1200 / Contact Us`}
          </p>
        </div>

        {main}

        <div className="col grey pb-2">
          <div className="text-center mb-1 h2" style={{ fontSize: "27px" }}>
            Online Parking Services
          </div>
          <div className="row justify-content-center gy-1 btn-text">
            <button
              className="btn btn-danger col-10"
              onClick={() => nav("/BuyDailyPass")}
            >
              Buy Daily Pass
            </button>
            <button className="btn btn-danger col-10">Extend Pass</button>
            <button
              className="btn btn-danger col-10"
              onClick={() => nav("/LocateLot")}
            >
              Locate Lot
            </button>
            <button className="btn btn-danger col-10">
              Purchase Semester Pass
            </button>
            <button
              className="btn btn-danger col-10"
              onClick={() => nav("/Calculate")}
            >
              Calculate (Semester vs Day to Day)
            </button>
          </div>
        </div>
        <footer className="sticky-bottom">
          <button
            className="btn btn-danger col-2 btn-text"
            style={{ position: "absolute", left: "75vw", bottom: "3vh" }}
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            Back to Top ^
          </button>
          <div
            className="row text-white bg-black"
            style={{ position: "absolute", width: "inherit" }}
          >
            <p>Created By Team Sensci - Fall 2022</p>
          </div>
        </footer>
      </div>
    </div>
    
    
  )
}
export default Calculate;