
import React from "react";
import pic from "./Images/EV-Charging.png";
import $ from "jquery";


function EVTransportation() {
    return (
      <div className="container">
        <div className="col text-center">
          <div className="" style={{ fontSize: "27px" }}>
            <h1>Calculator</h1>
            <h3>Compare daily pass to semester pass</h3>
          </div>
          <img
      src = {pic}
      alt=""
      position="absolute"
      width="80%"
      style={{ aspectRatio: "16/7" }}
    />

          <img
      src = {pic}
      alt=""
      position="absolute"
      width="80%"
      style={{ aspectRatio: "16/7" }}
    />
          <p className="mt-4">
            Below select the hours you plan to be at school, be mindful of gaps.
            Not all lots offer 1hr options find a designated ticket dispenser
          </p>
  
    
  
          <button type="button" onClick={() => EVTransportation()}>
            Calculate
          </button>
  
                  <div className="mt-3" id="result" style={{ fontSize: "27px" }}></div>
        </div>
      </div>
    );
  }

export default EVTransportation;