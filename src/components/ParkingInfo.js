import React from "react";
// import { Link, useNavigate } from "react-router-dom";
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

function handleSuggestion() {
	const email = "matapark2022@gmail.com";
	const subject = "Matapark Suggestion - Parking Tips";
	const body = "Please enter your suggestion here.";
	const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
		subject
	)}&body=${encodeURIComponent(body)}`;
	window.location.href = mailtoUrl;
}

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
					<a href="#Visitor"> Visitor Parking </a>|
					<a href="#Staff">
						<s>Faculty & Staff Parking</s> -&gt; Coming Soon
					</a>
				</h6>
				<p id="Students"></p>
				<br />
				<br />
				<h3> Student Parking Tips and Need to Knows</h3>
				<p>
					Students can purchase a semester permit or a daily parking permit to
					park. <br />
					Prices are: (0-2hr) $5.50, (2-4hr) $7.50, and All Day $9.50. <br />
					Kiosk only take Mastercard or Visa.
					<br />
					If you only have cash go to an Information Booth: <br />
					<ul style={{ listStyleType: "none" }}>
						<li>Booth #1 is located on Lindley Avenue off Nordhoff Street.</li>
						<li>Booth #2 is located on Prairie Street off Darby Avenue.</li>
						<li>Booth #3 is located on Prairie Street off Zelzah Avenue.</li>
					</ul>
					Student parking lots are:{" "}
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
				<div class="d-flex justify-content-between align-items-center">
					<h5 class="mb-0">
						<em>Parking Tips for Beginning of Semester:</em>
					</h5>
					<button class="btn btn-sm btn-danger" onClick={handleSuggestion}>
						Got a Hot Tip? Suggest it Here!
					</button>
				</div>

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
								If you're strapped for cash - street parking may be the way to
								go, but it will cost you in distance and time so be early or a
								quick walker!
							</td>
						</tr>
						<tr>
							<td>
								If you love convenience more than saving a few bucks, opt for
								daily parking in one of the lots. Lots that have heavy traffic
								like G3 or E6 may be completely full the first few weeks of
								class so try to get in early (before 9am) or much later in the
								day (late afternoon).
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
								your class starts to wait in that line.
							</td>
						</tr>
						<tr>
							<td>
								All Day parking passes on campus are not 24 hours, they only
								last until the end of the day. So if you plan to buy one for all
								day, make sure you get the most out of the 4+ hours paid for.
								All Day is benefical if you have several class back to back,
								plan to come and go from campus several times in a day or an
								extracurricular needing you on campus longer.
							</td>
						</tr>
					</tbody>
				</table>
				<br />
				<p id="Visitor"></p>
				<br />
				<br />
				<h3> Visitor Parking Tips and Need to Knows</h3>
				<p>
					Similiar to Students, you can purchase a daily parking permit to park
					at the same lots as students (please look at list in Student Section).{" "}
					<br />
					Prices are: (0-2hr) $5.50, (2-4hr) $7.50, and All Day $9.50. <br />
					Kiosk only take Mastercard or Visa.
					<br />
					If you only have cash go to an Information Booth: <br />
					<ul style={{ listStyleType: "none" }}>
						<li>Booth #1 is located on Lindley Avenue off Nordhoff Street.</li>
						<li>Booth #2 is located on Prairie Street off Darby Avenue.</li>
						<li>Booth #3 is located on Prairie Street off Zelzah Avenue.</li>
					</ul>
					You also can take advantage of Pay by Space Parking, Stalls that are
					for those visiting campus for a short period of time. <br />
					These parking stalls are located in lots B4, D1, F2, and G3 Surface
					lot and can be activated by paying with coins, cash or debit/credit
					cards.
				</p>

				<div class="d-flex justify-content-between align-items-center">
					<h5 class="mb-0">
						<em>Parking Tips for Year-Round Vistors:</em>
					</h5>
					<button class="btn btn-sm btn-danger" onClick={handleSuggestion}>
						Got a Hot Tip? Suggest it Here!
					</button>
				</div>
				<table>
					<tbody>
						<tr>
							<td>
								Picking up or dropping off a student? If it's brief, feel free
								to do so on any of the University Drives (North,West, or East),
								but if it will be longer or it's a bosy day, opt to meet your
								student on a side street or in the front lot of a parking
								structure like G3, B3, or B5. Typically this is not as crowded.
							</td>
						</tr>
						<tr>
							<td>
								The Campus is larger than you may think - make sure where you
								park is close to the event or building you are trying to get to.
								Try our Locate Lot Feature if you want to know the closest
								parking lot to the building you plan to be at.
							</td>
						</tr>
						<tr>
							<td>
								<strong>Special Events</strong>
								<br />
								If you are visiting for a Graduation or Honors Convocation,
								these ceremonies will take place on the University Library Lawn
								in the middle of campus.
								<br />
								The most convenient parking is on the west side of the campus
								(Lots B1, B2 and the B3 parking structure). It's best to enter
								the campus at Nordhoff St. and Darby Ave. and follow the signs
								to the closest available parking. <br />
								Please make sure to come early so you have time to find parking
								and make corrections if things get confusing. Lot G3, G4, F5,
								and F6 will also be open if you prefer parking on the eastside
								of campus, but it won't be as close in walking distance!
							</td>
						</tr>
					</tbody>
				</table>
				<br />
				<p id="Staff"></p>
				<br />
				<br />
				<h3>Faculty & Staff Parking Tips and Need to Knows -- Coming Soon!</h3>
				<p>
					Faculty and Staff tips coming soon.{" "}
					<button class="btn btn-sm btn-danger" onClick={handleSuggestion}>
						Part of Staff or Faculty? Suggest Tips Here!
					</button>
				</p>

				<table>
					<tbody>
						<tr>
							<td>Coming Soon...</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}

export default ParkingInfo;
