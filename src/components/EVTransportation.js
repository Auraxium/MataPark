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
        <img src={pic} alt="" position="absolute" width="80%" style={{ aspectRatio: "15/7" }} çç />
        <h6 id="nav" align="center">
          <a href="#Current">Charging Update </a>|<a href="#Skateboards">Skateboards</a>|<a href="#Metro">Metro U-Pass</a>
        </h6>
        <p>
          California State University, Northridge is currently undergoing an expansion to their electric vehicle charging stations. Anyone that commutes with an EV vehicle will have access to around 90 charging stations on the platform Powered By Chargie, which happens to be one of biggest
          installers for EV charging stations.
        </p>
        <p>Map indicates charging station locations</p>
        <img src={pic2} alt="" position="absolute" width="120%" style={{ aspectRatio: "13/7" }} />
        <h3 id="Current">Current EV Chargers Update</h3>
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
        <img src={pic3} alt="" position="absolute" width="80%" style={{ aspectRatio: "15/7" }} />
        <h3 id="Skateboards">Use of Skateboards, Roller-Skates, Hoverboards, and Other Similar Equipment</h3>
        <p>According to CSUN's Policies and Procedures:</p>
        <p> The use of in-line skates, roller skates, skateboards, electronic skateboards and other similar skating equipment on the grounds of the campus for individual transportation is permitted. Skaters are required to be aware of pedestrians and be at a safe speed.</p>
        <h3 id="Metro">Metro U-Pass Information</h3>
        <p>
          Spring 2023 U-Passes will be available for purchase and renewal at the AS Ticket Office starting January 4, 2023. The price is still $95 and it is valid from 1/09/23 through 5/28/23. To qualify for the Metro U-Pass, you must be enrolled in 6 or more units for undergraduate students and 3
          or more units for graduate students. To purchase a U-Pass, please follow the steps below.
        </p>
        Online: <br />
        <ul className="text-start" style={{ listStyleType: "none" }}>
          <li>Login to your MyCSUN portal</li>
          <li>Select the "My Finances" tab and then "My Accounts"</li>
          <li>On the "My Accounts" page, select "Purchase CSUN Metro U-Pass"</li>
          <li>Select term (ex. Fall or Spring)</li>
          <li>If this is your first time purchasing a U-Pass, complete the U-Pass Information form at https://lametro.formstack.com/forms/upass_csun.</li>
          <li>Bring your CSUN ID, the email confirmation of your purchase, and screenshot of your completed survey to the Ticket Office where we will give you your U-Pass"</li>
        </ul>
        <div className="mt-3" id="result" style={{ fontSize: "27px" }}></div>
      </div>
    </div>
  );
}

export default EVTransportation;
