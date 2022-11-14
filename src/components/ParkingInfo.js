import React from "react";
import { Link, useNavigate } from "react-router-dom";
import B1 from "./Images/ParkingB1.png";
import B3 from "./Images/ParkingB3.png";
import B5 from "./Images/ParkingB5.png";
import B6 from "./Images/ParkingB6.png";

function ParkingInfo() {
  return (
    <>
      <div className="col-7 ">
        <div className="" style={{ fontSize: "27px" }}>
          <h1>Parking Information</h1>
        </div>

        <p>
          Students can purchase a semester permit or a daily parking permit to
          park. Student parking lots are:{" "}
        </p>
        <ul>
          <img src={B1} alt="B1 Parking Lot" width="40%" />
          <img src={B3} alt="B3 Parking Lot" width="40%" />
          <img src={B5} alt="B5 Parking Lot" width="40%" />
          <img src={B6} alt="B6 Parking Lot" width="40%" />
          <li>
            Lots B1, B3 parking structure & B5 parking structure, located off of
            Darby Street.{" "}
          </li>
          <li>Lot B6, located off Plummer Street </li>
          <li>Lot E6 on Halsted Street. </li>
          <li>Lot F5</li>
          <li>Lots G3 and G3 parking structure, located off Zelzah Street.</li>
          <li>Lots F10, and G12 </li>
          <li>
            The UPA Parking Structure G9 is available until 7:30pm, for
            non-resident student parking. After 7:30pm, access is restricted to
            Housing residents, ONLY.{" "}
          </li>
        </ul>
      </div>
    </>
  );
}

export default ParkingInfo;
