import React from "react";
import ParkingInfo from "./ParkingInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function calu() {
  var m1 = document.getElementById("Monday");
  var m1field = parseFloat(m1.options[m1.selectedIndex].value);

  var t1 = document.getElementById("Tuesday");
  var t1field = parseFloat(t1.options[t1.selectedIndex].value);

  var w1 = document.getElementById("Wednesday");
  var w1field = parseFloat(w1.options[w1.selectedIndex].value);

  var tr1 = document.getElementById("Thursday");
  var tr1field = parseFloat(tr1.options[tr1.selectedIndex].value);

  var f1 = document.getElementById("Friday");
  var f1field = parseFloat(f1.options[f1.selectedIndex].value);

  var s1 = document.getElementById("Saturday");
  var s1field = parseFloat(s1.options[s1.selectedIndex].value);

  var alertMessage =
    "It would cost you: " +
    (m1field + t1field + w1field + tr1field + f1field + s1field) * 16 +
    " Currently the parking pass for the semester is about $220";
  alert(alertMessage);
}

function Calculate() {
  return (
    <div className="container">
    <div className="col text-center ">
      <div className="" style={{ fontSize: "27px" }}>
        <h1>Calculator</h1>
        <h3> Compare daily pass to semester pass</h3>
      </div>

      <p className="mt-4">
        Below select the hours you plan to be at school, be mindful of gaps. Not
        all lots offer 1hr options find a designated ticket dispenser
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
      <button type="button" onClick={() => calu()}>
        Calculate
      </button>
    </div>
  </div>
  );
}
export default Calculate;
