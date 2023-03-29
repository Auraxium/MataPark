import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import port from "../port.js";
import $ from "jquery";
import "../styles/ParkingAvailability.css";

const Lot = (props) => (
  <div className="d-flex ">
    <div className="col-6 border font-big px-2">{props.lot}:</div>
    <div className="col-6 border font-big text-end px-2">
      {props.slots} {props.slots == "Open" ? "" : "Spaces left"}
    </div>
  </div>
);

function ParkingAvailability() {
  var [lots, setLots] = useState([]);
  const loadSpinner = useRef();

  useEffect(() => {
    let now = Date.now();

    if (localStorage.getItem("lots-cookie")) {
      let lotCookie = JSON.parse(localStorage.getItem("lots-cookie"));

      if (now - lotCookie.now < 10 * 1000 * 60) 
				setLots(lotCookie.lots);

      // if ((now - +localStorage.getItem("last-PA-request")) < 60000) {
			// 	loadSpinner.current.style.display = "none";
			// 	console.log('too early')
      //   return;
			// }
    }

    //localStorage.setItem("last-PA-request", now);

    axios.get("http://localhost:8080/parkmap").then((res) => {

      localStorage.setItem("lots-cookie", JSON.stringify(res.data));
      setLots(res.data.lots);

      loadSpinner.current.style.display = "none";
    }).catch(err => {
			console.log(err);
      setLots(null)
      loadSpinner.current.style.display = "none";
		});
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center gx-2">
        <div className="px-2" style={{ fontSize: "25px" }}>
          Parking Availability
        </div>
        <span className="loader" ref={loadSpinner}></span>
      </div>

      <div id="lots">
        {!lots ? "server broke :(" : lots.map((e) => (
          <Lot lot={e.lot} slots={e.slots} key={crypto.randomUUID()} />
        ))}
      </div>
    </>
  );
}

export default ParkingAvailability;