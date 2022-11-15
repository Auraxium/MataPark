import React from 'react';
import ParkingInfo from "./ParkingInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




function calu(){
  var m1 = document.getElementById("Monday")
  var m1field = parseFloat(m1.options[m1.selectedIndex].value);

  var t1 = document.getElementById("Tuesday")
  var t1field = parseFloat(t1.options[t1.selectedIndex].value);

  var w1 = document.getElementById("Wednesday")
  var w1field = parseFloat(w1.options[w1.selectedIndex].value);

  var tr1 = document.getElementById("Thursday")
  var tr1field = parseFloat(tr1.options[tr1.selectedIndex].value);

  var f1 = document.getElementById("Friday")
  var f1field = parseFloat(f1.options[f1.selectedIndex].value);

  var s1 = document.getElementById("Saturday")
  var s1field = parseFloat(s1.options[s1.selectedIndex].value);

  var alertMessage = 'It would cost you: $' +((m1field +t1field +w1field +tr1field 
  +f1field+s1field)*16) + ' Currently the parking pass for the semester is about $220';
  alert(alertMessage);
}
const MiddleContent = () => (
  <div className="col-7 text-center ">
    <div className="" style={{ fontSize: "27px" }}>
      <h1>Calculator</h1>
      <h3> Compare daily pass to semester pass</h3>
    </div>
    
    <p className="mt-4">
      Below select the hours you plan to be at school, be mindful of gaps.
      Not all lots offer 1hr options find a designated ticket dispenser
    </p>
<form>
<div class="form-group">
    <label for="exampleFormControlSelect1">Monday</label>
    <select class="form-control" id="Monday">
      <option value="0"> Not coming</option>
      <option value="3">1hr</option>
      <option value="5.5">2hr</option>
      <option value="7.5">2-4hr</option>
      <option value="9.5">4+hr</option>
    </select>
  </div>

  <div class="form-group">
    <label for="exampleFormControlSelect1">Tuesday</label>
    <select class="form-control" id="Tuesday">
      <option value="0"> Not coming</option>
      <option value="3">1hr</option>
      <option value="5.5">2hr</option>
      <option value="7.5">2-4hr</option>
      <option value="9.5">4+hr</option>
    </select>
  </div>

  <div class="form-group">
    <label for="exampleFormControlSelect1">Wednesday</label>
    <select class="form-control" id="Wednesday">
      <option value="0"> Not coming</option>
      <option value="3">1hr</option>
      <option value="5.5">2hr</option>
      <option value="7.5">2-4hr</option>
      <option value="9.5">4+hr</option>
    </select>
  </div>

  <div class="form-group">
    <label for="exampleFormControlSelect1">Thursday</label>
    <select class="form-control" id="Thursday">
      <option value="0"> Not coming</option>
      <option value="3">1hr</option>
      <option value="5.5">2hr</option>
      <option value="7.5">2-4hr</option>
      <option value="9.5">4+hr</option>
    </select>
  </div>

  <div class="form-group">
    <label for="exampleFormControlSelect1">Friday</label>
    <select class="form-control" id="Friday">
      <option value="0"> Not coming</option>
      <option value="3">1hr</option>
      <option value="5.5">2hr</option>
      <option value="7.5">2-4hr</option>
      <option value="9.5">4+hr</option>
    </select>
  </div>

  <div class="form-group">
    <label for="exampleFormControlSelect1">Saturday</label>
    <select class="form-control" id="Saturday">
      <option value="0"> Not coming</option>
      <option value="3">1hr</option>
      <option value="5.5">2hr</option>
      <option value="7.5">2-4hr</option>
      <option value="9.5">4+hr</option>
    </select>
  </div>

</form>
<button type="button" onClick={() => calu()}>Calculate</button>

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