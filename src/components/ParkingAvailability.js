import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import port from "../port.js"

const Lot = (props) => (
	<div className="d-flex ">
		<div className="col-6 border font-big">{props.lot}:</div>
		<div className="col-6 border font-big text-end">{props.slots} {((props.slots) == 'Open') ? '':'Spaces left'}</div>
	</div>
)

function ParkingAvailability() {
	var [lots, setLots] = useState([])

	useEffect(() => {
		if(localStorage.getItem("getLots"))
			setLots(JSON.parse(localStorage.getItem("getLots")))

		axios.get(port+'/parking-availability').then(res => {
			localStorage.setItem("getLots", JSON.stringify(res.data));
			setLots(res.data);
		})
	}, [])

  return (
    <>
      <div className="text-center">Parking Availability</div>
      <div id="lots">{lots.map(e => <Lot lot={e.lot} slots={e.slots} key={crypto.randomUUID()}/>)}</div>
    </>
  );
}

export default ParkingAvailability