import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Carousel } from "react-carousel-minimal";
import "../styles/ParkingInfo.css";
import B5 from "./Images/B5_Feb2023.jpg";
import B5Station from "./Images/Paystation2.jpeg";
import E6Station from "./Images/E6Station_Nov2022.jpg";
import Payrate from "./Images/ParkingRate_Feb2023.jpg";

const data = [
	{
		image: B5,
		caption: "B5 Parking Level 1",
	},
	{
		image: E6Station,
		caption: "E6 Pay Station at back of lot",
	},
	{
		image: B5Station,
		caption: "Close up of B5 Pay Station",
	},
	{
		image: Payrate,
		caption: "Daily Rate to Park on Campus, February 2023",
	},
];

const captionStyle = {
	fontSize: "2em",
	fontWeight: "bold",
};
const slideNumberStyle = {
	fontSize: "20px",
	fontWeight: "bold",
};

function ParkingInfo() {
	return (
		<>
			<div className="">
				<div className="" style={{ fontSize: "27px" }}>
					<h1>Parking Information</h1>
				</div>
				{/* Carousel */}
				<div className="App">
					<div style={{ textAlign: "center" }}>
						<div
							style={{
								padding: "0 20px",
							}}
						>
							<Carousel
								data={data}
								time={5000}
								width="900px"
								height="400px"
								captionStyle={captionStyle}
								radius="10px"
								slideNumber={true}
								slideNumberStyle={slideNumberStyle}
								captionPosition="bottom"
								automatic={true}
								dots={true}
								pauseIconColor="white"
								pauseIconSize="40px"
								slideBackgroundColor="darkgrey"
								slideImageFit="cover"
								thumbnails={false}
								thumbnailWidth="100px"
								style={{
									textAlign: "center",
									maxWidth: "850px",
									maxHeight: "500px",
									margin: "40px auto 0px",
								}}
							/>
						</div>
					</div>
				</div>
				<h6 id="nav" align="center">
					<a href="#Students">Student Parking </a>|
					<a href="#"> Visitor Parking </a>|
					<a href="#"> Faculty & Staff Parking</a>
				</h6>
				<h3 id="Students"> Student Parking Tips and Need to Knows</h3>
				<p>
					Students can purchase a semester permit or a daily parking permit to
					park. Student parking lots are:{" "}
				</p>
				<ul>
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
				<h5>
					<em>Parking Tips for Beginning of Semester:</em>
				</h5>
				<table>
					<tbody>
						<tr>
							<td>
								Many students generally will choose daily parking or park on the
								streets for the first few weeks of school.
							</td>
						</tr>
						<tr>
							<td>
								If your strapped for cash - street parking may be the way to go,
								but it will cost you in distance and time so be early or a quick
								walker!
							</td>
						</tr>
						<tr>
							<td>
								If you love convenience more than saving a few bucks, opt for
								daily parking in one of the lots. Lots that have heavy traffic
								like E6 may be completely full the first few weeks of class so
								try to get in early (before 9am) or much later in the day (late
								afternoon).
							</td>
						</tr>
						<tr>
							<td>
								Don't want to risk going to a full lot? choose a parking
								structure like B3 or B5 instead. You may not get a spot near the
								elevators, but you will find a spot!
							</td>
						</tr>
						<tr>
							<td>
								If you're planning on getting a day pass, the lines are usually
								really long the first week, so give yourself lots of time before
								your class starts to waiting in that line.
							</td>
						</tr>
					</tbody>
				</table>
				<br />

				{/* List version */}
				{/* <ul>
					<li>
						Many students generally will choose daily parking or park on the
						streets for the first few weeks of school.
					</li>
					<hr className="short-hr" />
					<li>
						If your strapped for cash - street parking may be the way to go, but
						it will cost you in distance and time so be early or a quick walker!
					</li>{" "}
					<hr className="short-hr" />
					<li>
						If you love convenience more than saving a few bucks, opt for daily
						parking in one of the lots. Lots that have heavy traffic like E6 may
						be completely full the first few weeks of class so try to get in
						early (before 9am) or much later in the day (late afternoon).
					</li>
					<hr className="short-hr" />
					<li>
						Don't want to risk going to a full lot? choose a parking structure
						like B3 or B5 instead. You may not get a spot near the elevators,
						but you will find a spot!
					</li>
				</ul> */}
			</div>
		</>
	);
}

export default ParkingInfo;
