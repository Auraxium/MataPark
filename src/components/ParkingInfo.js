import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Carousel } from "react-carousel-minimal";
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
				<h3 id="Students"> Student Parking</h3>
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
			</div>
		</>
	);
}

export default ParkingInfo;
