import React, { useState } from "react";
import "../styles/ParkingTimer.css";
import Countdown from "react-countdown";

function ParkingTimer() {
	const [isActive, setIsActive] = useState(false);
	const [hours, setHours] = useState(0);
    const [message, setMessage] = useState(``);
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(now.getDate() + 1);
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateWithoutTime = tomorrow.toLocaleDateString('en-US', dateOptions);

	const btnClick = () => {
		setIsActive(!isActive);
	};

    const handleTime = (e) => {
        const selectedHours = parseInt(e.target.value, 10);
        setHours(selectedHours);
    };
	// Random component
	const Completionist = () => <span>You're Expired!</span>;

	// Renderer callback with condition
	const renderer = ({ hours, minutes, seconds, completed }) => {
		if (completed) {
			// Render a completed state
			return <Completionist />;
		} else {
			// Render a countdown
			return (
				<span>
					{hours}:{minutes}:{seconds}
				</span>
			);
		}
	};
	return (
		<div className="container mt-4">
			<div className="col">
				<div className="text-center text-light mb-2 bg py-4 rounded-3 border shadow">
					<h1 className="fw-bold display-5">Parking Timer</h1>
					<h3>Don't remember how long you parked your car? We got you!</h3>
				</div>
				<div className="row text-center">
					<div
						className="col mt-4"
						style={{ borderRight: "3px solid grey", height: "60vh" }}
					>
						<p className="">
							<strong>If you parked on campus:</strong> <br />
							Press the button corresponding to the hours for your ticket to
							start a timer now <br />
							or tell us approximately when you arrived and how long your ticket
							is for and we will remind you about 20 minutes before it expires.
						</p>
						<div
							className="btn-group btn-group-lg mb-4"
							role="group"
							aria-label="Parking Hour Timer"
						>
							<button
								type="button"
								className={isActive ? "btn btn-primary active" : "btn btn-primary"}
								onClick={(e) => {
									alert("1 Hour Button was clicked!");
									btnClick();
                                    handleTime(e); 
								}}
								style={{ borderRight: "3px dotted blue" }}
                                value = {1}
							>
								1 Hour
							</button>
							<button
								type="button"
								className={
									isActive ? "btn btn-primary active" : "btn btn-primary"
								}
								onClick={(e) => {
									alert("2 Hours Button was clicked!");
									btnClick();
                                    handleTime(e);
								}}
								style={{ borderRight: "3px dotted blue" }}
                                value = {2}
							>
								2 Hours
							</button>
							<button
								type="button"
								className={
									isActive ? "btn btn-primary active" : "btn btn-primary"
								}
								onClick={(e) => {
									alert("4 Hours Button was clicked!");
									btnClick();
                                    handleTime(e);
								}}
								style={{ borderRight: "3px dotted blue" }}
                                value = {4}
							>
								4 Hours
							</button>
							<button
								type="button"
								className={
									isActive ? "btn btn-primary active" : "btn btn-primary"
								}
								onClick={() => {
									alert("All Day Button was clicked!");
									btnClick();
                                    setMessage(`Your Pass Expires: ${dateWithoutTime}`);
								}}
							>
								All Day
							</button>
						</div>
						<br />
                        {message && <p>{message}</p>}
						{hours > 0 && <Countdown date={Date.now()+ hours * 3600000} renderer={renderer} />}
						<p>
							<strong>OR</strong>
						</p>

						<form className="row gy-2 gx-3 align-items-center justify-content-center mt-4">
							<div className="col-auto">
								<label className="visually-hidden" for="TicketHours">
									Time Parked
								</label>
								<div className="input-group">
									<div className="input-group-text">Time Parked</div>
									<input
										type="time"
										className="form-control"
										id="TicketHours"
										placeholder="Choose Time"
										defaultValue="09:00"
									/>
								</div>
							</div>
							<div className="col-auto">
								<label className="visually-hidden" for="TicketHours">
									Ticket Hours
								</label>
								<select className="form-select" id="TicketHours" required>
									<option value="" disabled selected hidden>
										Hours of Ticket...
									</option>
									<option value="1hr">1 Hour</option>
									<option value="2hr">2 Hours</option>
									<option value="4hr">4 Hours</option>
									<option value="24hr">All Day</option>
								</select>
							</div>
							<div className="col-auto">
								<button type="submit" className="btn btn-primary" value="Submit">
									Submit
								</button>
							</div>
						</form>
					</div>
					<div className="col mt-4">
						<p className="">
							<strong>If you parked on the street:</strong> <br />
							Tell us when you arrived,how much time you can park there,and
							we'll remind you 15 minutes before it expires. We'll let you know
							when you need to leave so you have a peace of mind - no tickets
							today!
						</p>
						<form className="row gy-2 gx-3 align-items-center justify-content-center mt-4">
							<div className="col-auto">
								<label className="visually-hidden" for="StreetHours">
									Time Parked
								</label>
								<div className="input-group">
									<div className="input-group-text">Time Parked</div>
									<input
										type="time"
										className="form-control"
										id="StreetHours"
										placeholder="Choose Time"
										defaultValue="09:00"
									/>
								</div>
							</div>
							<div className="col-auto">
								<label className="visually-hidden" for="StreetHours">
									Street Hours
								</label>
								<select className="form-select" id="StreetHours" required>
									<option value="" disabled selected hidden>
										How Much Time?
									</option>
									<option value="30min">30 minutes</option>
									<option value="45min">45 minutes</option>
									<option value="1hr">1 Hour</option>
									<option value="2hr">2 Hours</option>
									<option value="3hr">3 Hours</option>
									<option value="4hr">4 Hours</option>
									<option value="5hr">5 Hours</option>
								</select>
							</div>
							<div className="col-auto">
								<button type="submit" className="btn btn-primary" value="Submit">
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
export default ParkingTimer;
