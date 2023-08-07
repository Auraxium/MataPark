import React from "react";
import ParkingInfo from "./ParkingInfo";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Collapse, Dropdown, Button } from "react-bootstrap";
import $ from "jquery";
import axios from "axios";
import port from "../port";
import ParkingAvailability from "./ParkingAvailability";
import EVTransportation from "./EVTransportation";
import Calculate from "./Calculate";
import TwitterFeed from "./TwitterFeed";
import WeatherWidget from "./WeatherWidget";
import AccountMenu from "./AccountMenu";

const delay = (secs) => new Promise((resolve, reject) => setTimeout(() => resolve(""), secs));

const MiddleContent = () => (
  <div className="text-center m-3">
    <div className="" style={{ fontSize: "27px" }}>
      <h1>Welcome</h1>
    </div>
    <img src="https://www.csun.edu/sites/default/files/field_image/field_slideshow_slides/_OGF1846-Edit-Edit%20-%20PEO_0.jpg" alt="" position="absolute" width="80%" style={{ aspectRatio: "16/7" }} />
    <p className="mt-4">
      Welcome to Matapark, a parking app just for CSUN Matadors and visitors alike. This app is dedicated to making sure your parking experience is easy and convenient, from getting parking tips and finding spots no matter what transportation you enjoy to permit buying help and getting closure
      alerts, we have it all. <br />{" "}
      <strong>
        <em>Enjoy!</em>
      </strong>
    </p>
    <hr />
    <h2>Guide to Matapark</h2>
    <ul className="guide" style={{ textAlign: "left", listStyle: "none" }}>
      <li>
        <strong>
          <u>Parking Information:</u>
        </strong>{" "}
        <p style={{ display: "inline-block" }}>
          This is not your average parking info page, this page will have all the tips and tricks students and alumni know about parking and transportation on campus. <br />
          Want to know:
          <ul>
            <li>the best time to be on campus for a chance at a good parking spot?</li>
            <li>where to park on the streets if you don't want to pay for parking on campus?</li>
            <li>locations that are ideal to get picked up or dropped off at?</li>
          </ul>
          Then go to the Parking Information tab to learn what students are saying.
        </p>
      </li>
      <li>
        <strong>
          <u>Parking Availability:</u>
        </strong>{" "}
        <p style={{ display: "block" }}>
          Need a spot right now, but want to know how busy it is?
          <br /> Need information about street parking?
          <br /> Get the latest parking lot vacancy and street parking info here.
        </p>
      </li>
      <li>
        <strong>
          <u>E.V. & Transportation:</u>
        </strong>{" "}
        <p style={{ display: "inline-block" }}>
          Have an electric car or not driving your own car on campus?
          <br />
          This is your source for all Electric Vehicle and Alternative Transportation needs including E.V. stations around campus, places you can board/bike without fees, bus schedules, and rideshare information.
        </p>
      </li>
      <li>
        <strong>
          <u>Locate Lot:</u>
        </strong>{" "}
        <p style={{ display: "inline-block" }}>
          Need to know the best parking lot for your schedule? <br />
          Find the closest lot based on the building you want to go to by searching or selecting it from our list.
        </p>
      </li>
      <li>
        <strong>
          <u>Calculate:</u>
        </strong>{" "}
        <p style={{ display: "inline-block" }}>
          Paying for parking, but not sure if your getting the best deal?
          <br />
          Try our parking calculator to find out if you can save some money during your semester.
        </p>{" "}
      </li>
    </ul>
  </div>
);

const Notif = ({ href, content }) => (
  <li>
    <a className="notify" href={href}>
      {content}
    </a>
    <hr />
  </li>
);

const Service = ({ click, name }) => (
  <button className="btn btn-danger col-10" onClick={click}>
    {name}
  </button>
);

function Homepage() {
  let nav = useNavigate();
  var [main, SetMain] = useState(MiddleContent);
  const [showContent, setShowContent] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const isSmallMobile = useMediaQuery({ maxWidth: 430 });

  const handleCollapse = () => {
    setShowContent(!showContent);
  };

  const Tab = ({ content, name }) => (
    <div className="col-3 py-4" onClick={() => SetMain(content)}>
      {name}
    </div>
  );

  var tabclick = (event, content) => {
    console.log(event.target);
    // $(".highlight").removeClass("highlight");
    $(event.target).addClass("highlight");
    SetMain(content);
  };

  useEffect(() => {
    let googToken;

    if (localStorage.getItem("googUUID")) {
      console.log("uuids nuts");
      axios
        .post(port + "/googGetToken", {
          uuid: localStorage.getItem("googUUID"),
        })
        .then((ax) => {
          googToken = ax.data;
          localStorage.removeItem("googUUID");
          if (googToken.username == null) return;
          localStorage.setItem("googToken", JSON.stringify(googToken));
          console.log(googToken);
          $(".nav-names").html(googToken.username);
          axios
            .post(port + "/saveData", {
              _id: googToken.googleId,
              data: { username: googToken.username },
            })
            .catch((err) => console.log(err));
        });
    } else if (localStorage.getItem("googToken")) {
      googToken = JSON.parse(localStorage.getItem("googToken"));
      if (!googToken.username) return localStorage.removeItem("googToken");
      $(".nav-names").html(googToken.username);
      axios
        .post(port + "/loadData")
        .then((data) => {
          let account = data.data;
          console.log(account);
          //process data here
          // axios(port + "/saveData", { _id: account._id, data: {} });
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div id="top" className="d-flex justify-content-center">
      {/* <AccountMenu /> */}
      <div className="col-m-11">
        <div className="d-flex m-0 text-center text-white bg-black tab-header">
          {isMobile ? (
            <div className="d-flex w-100 justify-content-center align-items-center" style={{ height: "60px" }}>
              <div className="ddd ps-3 w-100 h-100 d-flex align-items-center text-center justify-self-center" >
                <Dropdown>
                  <Dropdown.Toggle
                    as="span"
                    // variant="secondary"
                    id="dropdown-basic"
                    style={{
                      // width: "50vw",
                      display: "flex",
                      justifyContent: "center",
                      fontSize: isSmallMobile ? "0.8em" : "1em",
                      alignItems: "center",
                    }}
                  >
                    Page Menu
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">
                      <Tab content={<MiddleContent />} name={"Home"} click={(event) => {}} />
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2">
                      <Tab
                        content={<ParkingInfo />}
                        name={"Parking Information"}
                        click={(event) => {
                          console.log(event);
                        }}
                      />
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                      <Tab content={<ParkingAvailability />} name={"Parking Availability"} />
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="4">
                      <Tab content={<EVTransportation />} name={"E.V & Transportation"} />
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className="ddd w-100 h-100 d-flex align-items-center text-end justify-content-center" >
                <Dropdown>
                  <Dropdown.Toggle
                    as="span"
                    // variant="outline-light"
                    id="services-dropdown"
                    style={{
                      // width: "50vw",
                      display: "flex",
                      justifyContent: "center",
                      fontSize: isSmallMobile ? "0.8em" : "1em",
                      alignItems: "center",
                      margin: "0 30px 0 0",
                    }}
                  >
                    Online Parking Services
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {/* <Dropdown.Item onClick={() => nav("/BuyDailyPass")}>
										Buy Daily Pass
									</Dropdown.Item> */}
                    <Dropdown.Item onClick={() => nav("/Calculate")}>Semester Pass Calculator</Dropdown.Item>
                    <Dropdown.Item onClick={() => nav("/ParkingTimer")}>Parking Timer</Dropdown.Item>
                    <Dropdown.Item onClick={() => nav("/LocateLot")}>Locate Lot</Dropdown.Item>
                    <Dropdown.Item onClick={() => (window.location.href = "https://www.csun.edu/sites/default/files/student_refund_schedule_2022-2023.pdf")}>Official Semester Pass Prices</Dropdown.Item>
                    {/* <Dropdown.Item
										onClick={() =>
											axios(
												port + "/saveData",
												JSON.parse(localStorage.getItem("googToken"))
											).then((res) => console.log(res))
										}
									>
										Save Account
									</Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          ) : (
            <>
              <Tab content={<MiddleContent />} name={"Home"} click={(event) => {}} />
              <Tab
                content={<ParkingInfo />}
                name={"Parking Information"}
                click={(event) => {
                  console.log(event);
                }}
              />
              <Tab content={<ParkingAvailability />} name={"Parking Availability"} />
              <Tab content={<EVTransportation />} name={"E.V & Transportation"} />
            </>
          )}
        </div>

        <div className="row m-0">
          {isMobile ? (
            <>
              <Button size="sm" variant="outline-secondary" onClick={() => setShowContent(!showContent)} aria-controls="collapsible-section" aria-expanded={showContent} className="mb-2">
                <span>{showContent ? "Hide" : "Show"} Weather and Road Alert Feed</span>
              </Button>
              <Collapse in={showContent}>
                <div className="col grey" id="collapsible-section">
                  <br />
                  <WeatherWidget />
                  <br />
                  <h5 className="text-center">Road and Highway Feed</h5>
                  <TwitterFeed />
                  {isMobile ? null : (
                    <div>
                      <div className="mb-1 font-big h2">Contact Us</div>
                      <div className="">
                        <strong>
                          <em>{`For Any Website Questions or Problems:`}</em>
                        </strong>{" "}
                        <br />
                        <a href="mailto:matapark2022@gmail.com">{`Email the Team`}</a> <br /> <br />
                        <strong>
                          <em>{`All Other Issues with Parking Please Contact:`}</em>
                        </strong>{" "}
                        <br />
                        {`Parking and Transportation Services`} <br />
                        {`Phone: (818) 677-2157 | `}
                        <a href="mailto:parking@csun.edu">{`Email`}</a>
                        <hr />
                        {`Cal State University, Northridge`} <br />
                        <em>
                          {`18111 Nordhoff Street`}
                          <br />
                          {`Northridge, CA 91330-8290`} <br />
                          {`© Team Sensci 2022`} <br />
                        </em>
                      </div>
                    </div>
                  )}
                </div>
              </Collapse>
            </>
          ) : (
            <div className="col grey">
              <br />
              <WeatherWidget />
              <br />
              <h5 className="text-center">Road and Highway Feed</h5>
              <TwitterFeed />
              <div className="mb-1 font-big h2">Contact Us</div>
              <div className="">
                <strong>
                  <em>{`For Any Website Questions or Problems:`}</em>
                </strong>{" "}
                <br />
                <a href="mailto:matapark2022@gmail.com">{`Email the Team`}</a> <br /> <br />
                <strong>
                  <em>{`All Other Issues with Parking Please Contact:`}</em>
                </strong>{" "}
                <br />
                {`Parking and Transportation Services`} <br />
                {`Phone: (818) 677-2157 | `}
                <a href="mailto:parking@csun.edu">{`Email`}</a>
                <hr />
                {`Cal State University, Northridge`} <br />
                <em>
                  {`18111 Nordhoff Street`}
                  <br />
                  {`Northridge, CA 91330-8290`} <br />
                  {`© Team Sensci 2022`} <br />
                </em>
              </div>
            </div>
          )}

          <div className={isMobile ? "col-12" : "col-7"}>{main}</div>

          <div className="col grey pb-2">
            {isMobile ? null : (
              <>
                <div className="text-center mb-1 h2" style={{ fontSize: "27px" }}>
                  Online Parking Services
                </div>
                <div className="row justify-content-center gy-1 btn-text">
                  {/* <Service
										click={() => nav("/BuyDailyPass")}
										name={"Buy Daily Pass"}
									/> */}
                  <Service click={() => nav("/Calculate")} name={"Semester Pass Calculator"} />
                  <Service click={() => nav("/ParkingTimer")} name={"Parking Timer"} />
                  <Service click={() => nav("/LocateLot")} name={"Locate Lot"} />
                  <Service click={() => (window.location.href = "https://www.csun.edu/sites/default/files/student_refund_schedule_2022-2023.pdf")} name={"Official Semester Pass Prices"} />
                  {/* <Service
										click={() =>
											axios(
												port + "/saveData",
												JSON.parse(localStorage.getItem("googToken"))
											).then((res) => console.log(res))
										}
										name={"Save"}
									/> */}
                </div>
                <br />
              </>
            )}

            {isMobile ? null : (
              <>
                {/* Notifications - Placeholder */}
                <div className="text-center mb-1 h2" style={{ fontSize: "27px" }}>
                  Latest Parking Notifications
                </div>
                <div className="notifications">
                  <ul style={{ fontSize: "16px", color: "white" }}>
                    <Notif href={"http://www.csun.edu/sites/default/files/LetterFromTheVicePresidentOfAdmin%26Finance.pdf"} content={"A Message from Colin Donahue, Vice President for Administration Finance:Parking Permit Increase Notification"} />
                    <Notif href={"http://www.csun.edu/sites/default/files/Parking%20Update%20-%20Los%20Angeles%20Mayor%20Eric%20Garcetti%27s%20State%20Of%20The%20City%20-%204%2014%202015_0.pdf"} content={" Parking Update: Los Angeles Mayor Eric Garcetti's State Of The City"} />
                    <Notif href={"http://www.csun.edu/sites/default/files/B5%20Parking%20Lot%20Maintenance%20-%204%208%202015.pdf"} content={"B5 Slurry Closure and Parking Lot Maintenance 4/8/2015"} />
                    <Notif href={"http://www.csun.edu/sites/default/files/B5%20slurry%20closure%20map_rev%20040315_4_0.pdf"} content={"B5 Structure Closure Slurry Project"} />
                  </ul>
                </div>
              </>
            )}
            {isMobile ? (
              <>
                <div className="text-center mb-1 h2" style={{ fontSize: "27px" }}>
                  Latest Parking Notifications
                </div>
                <div className="notifications">
                  <ul style={{ fontSize: "16px", color: "white" }}>
                    <Notif href={"http://www.csun.edu/sites/default/files/LetterFromTheVicePresidentOfAdmin%26Finance.pdf"} content={"A Message from Colin Donahue, Vice President for Administration Finance:Parking Permit Increase Notification"} />
                    <Notif href={"http://www.csun.edu/sites/default/files/Parking%20Update%20-%20Los%20Angeles%20Mayor%20Eric%20Garcetti%27s%20State%20Of%20The%20City%20-%204%2014%202015_0.pdf"} content={" Parking Update: Los Angeles Mayor Eric Garcetti's State Of The City"} />
                    <Notif href={"http://www.csun.edu/sites/default/files/B5%20Parking%20Lot%20Maintenance%20-%204%208%202015.pdf"} content={"B5 Slurry Closure and Parking Lot Maintenance 4/8/2015"} />
                    <Notif href={"http://www.csun.edu/sites/default/files/B5%20slurry%20closure%20map_rev%20040315_4_0.pdf"} content={"B5 Structure Closure Slurry Project"} />
                  </ul>
                </div>
                <div className="row text-muted">
                  <div className="col-3 text-center">
                    <em>{`Contact Us`}</em>
                    <br />
                    <a href="mailto:matapark2022@gmail.com">{`SenSci Team Email`}</a>
                  </div>
                  <div className="col-4 text-center">
                    <em>{`Contact CSUN`}</em>
                    <br />
                    <a href="mailto:parking@csun.edu">{`Parking Services`}</a>
                  </div>
                  <div className="col-5 text-center">
                    {`Cal State University, Northridge`} <br />
                    <em>{`Matapark © 2023 Team Sensci`}</em>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
