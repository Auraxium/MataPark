
import React from "react";
import pic from "./Images/EV-Charging.png";
import pic2 from "./Images/EVMap.png";
import pic3 from "./Images/EVChargie.png";
import $ from "jquery";


function EVTransportation() {
    return (
      <div className="container">
        <div className="col text-center">
          <div className="" style={{ fontSize: "27px" }}>
            <h1>EV Charging and Transportation</h1>
           
          </div>
        
          <img
      src = {pic}
      alt=""
      position="absolute"
      width="80%"
      style={{ aspectRatio: "15/7" }}

    />
    
   <p>California State University, Northridge is currently undergoing an expansion to their
        electric vehicle charging stations. Anyone that commutes with an EV vehicle will have access
        to around 90 charging stations on the platform Powered By Chargie, which happens to be one of
        biggest installers for EV charging stations.
    </p>

    <p>
      Map indicates charging station locations
    </p>
          <img
      src = {pic2}
      alt=""
      position="absolute"
      width="120%"
      style={{ aspectRatio: "13/7" }}
      
    />
    
     <h3>Current EV Chargers Update</h3>
          <p className="mt-4">
            <li>B2: 8 chargers</li>
            <li>B6: 4 chargers</li>
            <li>G3: 4 chargers</li>
            <li>G6: 36 chargers</li>
            <li>G9: 4 chargers</li>
            <li>B4: 2 chargers</li>
            <li>B5: 10 chargers</li>
            <li>F2: 8 chargers</li>
            <li>F5: 2 DC fast chargers</li>
            <li>E6: 2 chargers</li>
            
          </p>
  
          <img
      src = {pic3}
      alt=""
      position="absolute"
      width="80%"
      style={{ aspectRatio: "15/7" }}

    />
  
         
  
                  <div className="mt-3" id="result" style={{ fontSize: "27px" }}></div>
        </div>
      </div>


    );


  }

export default EVTransportation;