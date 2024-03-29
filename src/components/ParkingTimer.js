import React, { useState, useRef } from "react";
import "../styles/ParkingTimer.css";
import Countdown from "react-countdown";
import WarningAlert from "./WarningAlert";
import { useMediaQuery } from "react-responsive";
// import axios from "axios";
// import port from "../port";

function ParkingTimer() {
	const timerRef = useRef(null);
	const isMobile = useMediaQuery({ maxWidth: 1024 });
	const storedHours = localStorage.getItem("hours");
	const storedIsActive = localStorage.getItem("isActive");
	const [hours, setHours] = useState(storedHours ? parseFloat(storedHours) : 0);
	const [isActive, setIsActive] = useState(
		storedIsActive ? JSON.parse(storedIsActive) : false
	);
	const [message, setMessage] = useState(``);
	const [allDay, setAllDay] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const now = new Date();
	const yesterday = new Date(now);
	yesterday.setDate(now.getDate() - 1);
	const tomorrow = new Date();
	tomorrow.setDate(now.getDate() + 1);
	const dateOptions = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	const dateWithoutTime = now.toLocaleDateString("en-US", dateOptions);
	const yesterdayWithoutTime = yesterday.toLocaleDateString(
		"en-US",
		dateOptions
	);
	const currentTime = now.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
	});

	const btnClick = () => {
		setIsActive(!isActive);
	};

	const handleTime = (e) => {
		// console.log(allDay);
		if (e.target.value === "-1") {
			setHours(-1);
			setAllDay(true);
		} else {
			const selectedHours = parseInt(e.target.value, 10);
			setHours(selectedHours);
			setAllDay(false);
		}
		timerRef.current.scrollIntoView({ behavior: "smooth" });
	};

	function handleSubmit(event) {
		event.preventDefault(); // Prevents the form from refreshing the page
		const timeParked = document.getElementById("TicketHours").value;
		const ticketHours = document.getElementById("TicketHoursSelect").value;
		const timeParts = timeParked.split(":");
		const ticketTime = new Date();
		ticketTime.setHours(timeParts[0], timeParts[1], 0, 0);

		// Calculate the time difference between the current time and the ticket time
		const timeDiffMs = now.getTime() - ticketTime.getTime();

		// Convert the time difference from milliseconds to hours with decimal
		const timeLeft = (timeDiffMs / 3600000).toFixed(1);

		// console.log("Time Parked:", timeParked);
		// console.log('Ticket Hours:', ticketHours);
		// console.log('Current time:', currentTime);
		// console.log('Time left:', timeLeft);

		if (ticketHours === "24") {
			setHours(-1);
			setAllDay(true);
			if (timeParked > currentTime) {
				setMessage(`Your Pass Expires at Midnight On: ${yesterdayWithoutTime}`);
			} else {
				setMessage(`Your Pass Expires at Midnight On: ${dateWithoutTime}`);
			}
		} else {
			setHours(ticketHours - timeLeft);
			setAllDay(false);
		}

		// // clear and re-render the alert
		setShowAlert(false);
		setFormSubmitted(true); // set formSubmitted to true after form submission
		timerRef.current.scrollIntoView({ behavior: "smooth" });
	}

	function handleSubmit2(event) {
		event.preventDefault(); // Prevents the form from refreshing the page
		const timeParked = document.getElementById("StreetHours").value;
		const ticketHours = document.getElementById("StreetHoursSelect").value;
		const timeParts = timeParked.split(":");
		const ticketTime = new Date();
		ticketTime.setHours(timeParts[0], timeParts[1], 0, 0);

		// Calculate the time difference between the current time and the ticket time
		const timeDiffMs = now.getTime() - ticketTime.getTime();
		const timeLeft = (timeDiffMs / 3600000).toFixed(3);
		setHours(ticketHours - timeLeft);
		setAllDay(false);
		setShowAlert(false);
		setFormSubmitted(true); // set formSubmitted to true after form submission
		timerRef.current.scrollIntoView({ behavior: "smooth" });
	}

	// Random component
	const Completionist = () => (
		<span className="bg-light">You're Parking has Expired!</span>
	);

	// Renderer callback with condition
	const renderer = ({ hours, minutes, seconds, completed }) => {
		if (completed) {
			// Render a completed state
			return <Completionist />;
		} else {
			//Reminder at the 20 minutes
			if (hours === 0 && minutes === 15 && seconds === 0) {
				setHours(0.25);
				setShowAlert(true);
			}
			if (hours === 0 && minutes < 15) {
				setHours(minutes / 60 + seconds / 3600);
				setShowAlert(true);
			}
			// Render a countdown
			return (
				<span className="bg-light">
					Time Left:
					<br />
					{hours > 0 && `${hours}:`}
					{hours > 0 || minutes > 0 ? `${minutes}:` : ""}
					{seconds}
				</span>
			);
		}
	};
	return (
		<div
			className="container mt-4"
			style={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}
		>
			<div className="alert-overlay">
				{showAlert && (
					<WarningAlert
						title="Reminder Alert"
						message="You have less than 15 minutes left before you ticket expires!"
					/>
				)}
			</div>
			<div className="col">
				<div className="text-center text-light mb-2 bg-warning py-4 rounded-3 border shadow">
					<h1 className="fw-bold text-dark display-5">Parking Timer</h1>
					<h3 className="text-dark">
						Don't remember how long you parked your car? We got you!
					</h3>
				</div>
				{isMobile ? (
					<>
						{/* Left Side of Screen - Parked on Campus */}
						<div className="col mt-4">
							<p className="">
								<strong>If you parked on campus:</strong> <br />
								Press the button corresponding to the hours for your ticket to
								start a timer now or tell us approximately when you arrived and
								how long your ticket is for and we will remind you about 15
								minutes before it expires.
							</p>
							<div className="d-flex justify-content-center">
								<div
									className="btn-group btn-warning btn-group-lg mb-4"
									role="group"
									aria-label="Parking Hour Timer"
								>
									<button
										type="button"
										className={
											isActive
												? "btn btn-warning text-dark active"
												: "btn text-dark btn-warning"
										}
										onClick={(e) => {
											btnClick();
											handleTime(e);
										}}
										style={{ borderRight: "3px dotted white" }}
										value={1}
									>
										1 Hour
									</button>
									<button
										type="button"
										className={
											isActive
												? "btn btn-warning text-dark active"
												: "btn text-dark btn-warning"
										}
										onClick={(e) => {
											btnClick();
											handleTime(e);
										}}
										style={{ borderRight: "3px dotted white" }}
										value={2}
									>
										2 Hours
									</button>
									<button
										type="button"
										className={
											isActive
												? "btn btn-warning text-dark active"
												: "btn text-dark btn-warning"
										}
										onClick={(e) => {
											btnClick();
											handleTime(e);
										}}
										style={{ borderRight: "3px dotted white" }}
										value={4}
									>
										4 Hours
									</button>
									<button
										type="button"
										className={
											isActive
												? "btn btn-warning text-dark active"
												: "btn text-dark btn-warning"
										}
										onClick={(e) => {
											btnClick();
											handleTime(e);
											setMessage(
												`Your Pass Expires at Midnight On: ${dateWithoutTime}`
											);
										}}
										value={-1}
									>
										All Day
									</button>
								</div>
							</div>
							<p className="text-center">
								<strong>OR</strong>
							</p>

							<form
								onSubmit={handleSubmit}
								className="row gy-2 gx-3 align-items-center justify-content-center mt-4"
							>
								<div className="col-auto">
									<label className="visually-hidden" htmlFor="TicketHours">
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
									<label className="visually-hidden" htmlFor="TicketHours">
										Ticket Hours
									</label>
									<select
										className="form-select"
										id="TicketHoursSelect"
										required
									>
										<option value="" disabled selected hidden>
											Hours of Ticket...
										</option>
										<option value="1">1 Hour</option>
										<option value="2">2 Hours</option>
										<option value="4">4 Hours</option>
										<option value="24">All Day</option>
									</select>
								</div>
								<div className="col-auto">
									<button
										type="submit"
										className="btn text-dark btn-warning"
										value="Submit"
									>
										Submit
									</button>
								</div>
							</form>
							<br />
						</div>
						<br />
						<hr />
						{/* Right side of screen - Parked on the Street */}
						<div className="col mt-4">
							<p className="">
								<strong>If you parked on the street:</strong> <br />
								Tell us when you arrived,how much time you can park there,and
								we'll remind you 15 minutes before it expires. We'll let you
								know when you need to leave so you have a peace of mind - no
								tickets today!
							</p>
							<form
								onSubmit={handleSubmit2}
								className="row gy-2 gx-3 align-items-center justify-content-center mt-4"
							>
								<div className="col-auto">
									<label className="visually-hidden" htmlFor="StreetHours">
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
									<label className="visually-hidden" htmlFor="StreetHours">
										Street Hours
									</label>
									<select
										className="form-select"
										id="StreetHoursSelect"
										required
									>
										<option value="" disabled selected hidden>
											How Much Time?
										</option>
										<option value="0.5">30 minutes</option>
										<option value="0.75">45 minutes</option>
										<option value="1">1 Hour</option>
										<option value="2">2 Hours</option>
										<option value="3">3 Hours</option>
										<option value="4">4 Hours</option>
										<option value="5">5 Hours</option>
									</select>
								</div>
								<div className="col-auto">
									<button
										type="submit"
										className="btn text-dark btn-warning"
										value="Submit"
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</>
				) : (
					<>
						<div className="row text-center">
							{/* Left Side of Screen - Parked on Campus */}
							<div
								className="col mt-4"
								style={{ borderRight: "3px solid grey", height: "40vh" }}
							>
								<p className="">
									<strong>If you parked on campus:</strong> <br />
									Press the button corresponding to the hours for your ticket to
									start a timer now <br />
									or tell us approximately when you arrived and how long your
									ticket is for and we will remind you about 15 minutes before
									it expires.
								</p>
								<div
									className="btn-group btn-warning btn-group-lg mb-4"
									role="group"
									aria-label="Parking Hour Timer"
								>
									<button
										type="button"
										className={
											isActive
												? "btn btn-warning text-dark active"
												: "btn text-dark btn-warning"
										}
										onClick={(e) => {
											btnClick();
											handleTime(e);
										}}
										style={{ borderRight: "3px dotted white" }}
										value={1}
									>
										1 Hour
									</button>
									<button
										type="button"
										className={
											isActive
												? "btn btn-warning text-dark active"
												: "btn text-dark btn-warning"
										}
										onClick={(e) => {
											btnClick();
											handleTime(e);
										}}
										style={{ borderRight: "3px dotted white" }}
										value={2}
									>
										2 Hours
									</button>
									<button
										type="button"
										className={
											isActive
												? "btn btn-warning text-dark active"
												: "btn text-dark btn-warning"
										}
										onClick={(e) => {
											btnClick();
											handleTime(e);
										}}
										style={{ borderRight: "3px dotted white" }}
										value={4}
									>
										4 Hours
									</button>
									<button
										type="button"
										className={
											isActive
												? "btn btn-warning text-dark active"
												: "btn text-dark btn-warning"
										}
										onClick={(e) => {
											btnClick();
											handleTime(e);
											setMessage(
												`Your Pass Expires at Midnight On: ${dateWithoutTime}`
											);
										}}
										value={-1}
									>
										All Day
									</button>
								</div>
								<br />
								<p>
									<strong>OR</strong>
								</p>

								<form
									onSubmit={handleSubmit}
									className="row gy-2 gx-3 align-items-center justify-content-center mt-4"
								>
									<div className="col-auto">
										<label className="visually-hidden" htmlFor="TicketHours">
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
										<label className="visually-hidden" htmlFor="TicketHours">
											Ticket Hours
										</label>
										<select
											className="form-select"
											id="TicketHoursSelect"
											required
										>
											<option value="" disabled selected hidden>
												Hours of Ticket...
											</option>
											<option value="1">1 Hour</option>
											<option value="2">2 Hours</option>
											<option value="4">4 Hours</option>
											<option value="24">All Day</option>
										</select>
									</div>
									<div className="col-auto">
										<button
											type="submit"
											className="btn text-dark btn-warning"
											value="Submit"
										>
											Submit
										</button>
									</div>
								</form>
								<br />
							</div>

							{/* Right side of screen - Parked on the Street */}
							<div className="col mt-4">
								<p className="">
									<strong>If you parked on the street:</strong> <br />
									Tell us when you arrived,how much time you can park there,and
									we'll remind you 15 minutes before it expires. We'll let you
									know when you need to leave so you have a peace of mind - no
									tickets today!
								</p>
								<form
									onSubmit={handleSubmit2}
									className="row gy-2 gx-3 align-items-center justify-content-center mt-4"
								>
									<div className="col-auto">
										<label className="visually-hidden" htmlFor="StreetHours">
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
										<label className="visually-hidden" htmlFor="StreetHours">
											Street Hours
										</label>
										<select
											className="form-select"
											id="StreetHoursSelect"
											required
										>
											<option value="" disabled selected hidden>
												How Much Time?
											</option>
											<option value="0.5">30 minutes</option>
											<option value="0.75">45 minutes</option>
											<option value="1">1 Hour</option>
											<option value="2">2 Hours</option>
											<option value="3">3 Hours</option>
											<option value="4">4 Hours</option>
											<option value="5">5 Hours</option>
										</select>
									</div>
									<div className="col-auto">
										<button
											type="submit"
											className="btn text-dark btn-warning"
											value="Submit"
										>
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</>
				)}

				<div className="text-center mb-2 mt-2 pt-4">
					<h1 id="timer" ref={timerRef} className="fw-bold display-5 pb-4">
						{allDay === true && message && (
							<p className="bg-light">{message}</p>
						)}
						{allDay === false && hours < 0 && (
							<p className="bg-light">
								Time difference less than 0, please adjust the time or am/pm!
							</p>
						)}
						{allDay === false && hours > 0 && (
							<Countdown
								key={formSubmitted ? Date.now() : "countdown"} // use key to force re-render on form submission
								style={{ fontSize: "1.5rem" }}
								date={Date.now() + hours * 3600000}
								renderer={renderer}
							/>
						)}
					</h1>
				</div>
			</div>
		</div>
	);
}
export default ParkingTimer;
