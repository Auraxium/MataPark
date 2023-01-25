import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import port from "../port.js"
import '../styles/ParkingAvailability.css'

const Lot = (props) => (
	<div className="d-flex ">
		<div className="col-6 border font-big">{props.lot}:</div>
		<div className="col-6 border font-big text-end">{props.slots} {((props.slots) == 'Open') ? '':'Spaces left'}</div>
	</div>
)

function ParkingAvailability() {
	var [lots, setLots] = useState([])
	const loadSpinner = useRef()

	useEffect(() => {
		if(localStorage.getItem("getLots"))
			setLots(JSON.parse(localStorage.getItem("getLots")))

		axios.get(port+'/parking-availability').then(res => {
			localStorage.setItem("getLots", JSON.stringify(res.data));
			loadSpinner.current.style.display = 'none';
			setLots(res.data);
		})
	}, [])

  return (
    <>
		<div className="d-flex justify-content-center align-items-center gx-2">
			<div className="px-2" style={{fontSize: '25px'}}>Parking Availability</div>
			<span class="loader" ref={loadSpinner}></span>
		</div>
      
      <div id="lots">{lots.map(e => <Lot lot={e.lot} slots={e.slots} key={crypto.randomUUID()}/>)}</div>
    </>
  );
}

export default ParkingAvailability