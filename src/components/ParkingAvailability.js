import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import port from "../port.js";
import $ from "jquery";
import "../styles/ParkingAvailability.css";

const Lot = (props) => (
  <div className="d-flex ">
    <div className="col-6 border font-big">{props.lot}:</div>
    <div className="col-6 border font-big text-end">
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

      if (now - lotCookie.date < 10 * 1000 * 60) 
				setLots(lotCookie.data);

      if ((now - +localStorage.getItem("last-PA-request")) < 60000) {
				loadSpinner.current.style.display = "none";
				console.log('too early')
        return;
			}
    }

    localStorage.setItem("last-PA-request", now);

    axios.get(port + "/parking-availability").then((res) => {
      let lotData = {
        data: res.data,
        date: Date.now(),
      };
      //console.log(lotData)

      localStorage.setItem("lots-cookie", JSON.stringify(lotData));
      setLots(lotData.data);

      loadSpinner.current.style.display = "none";
    }).catch(err => {
			console.log(err);
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
        {lots.map((e) => (
          <Lot lot={e.lot} slots={e.slots} key={crypto.randomUUID()} />
        ))}
      </div>
    </>
  );
}

export default ParkingAvailability;
