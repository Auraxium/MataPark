import React from "react";
import ParkingInfo from "./ParkingInfo";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";
import ParkingAvailability from "./ParkingAvailability";
import EVTransportation from "./EVTransportation";

const delay = (secs) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(""), secs));


const MiddleContent = () => (
  <div className="text-center m-0">
    <div className="" style={{ fontSize: "27px" }}>
      <h1>Welcome</h1>
    </div>
    <img
      src="https://www.csun.edu/sites/default/files/field_image/field_slideshow_slides/_OGF1846-Edit-Edit%20-%20PEO_0.jpg"
      alt=""
      position="absolute"
      width="80%"
      style={{ aspectRatio: "16/7" }}
    />
    <p className="mt-4">
      Welcome to Matapark, a parking app just for CSUN Matadors and visitors
      alike. This app is dedicated to making sure your parking experience is
      easy and convenient, from getting parking information and finding spots to
      permit buying help and getting closure alerts, we have it all. <br />{" "}
      Enjoy!
    </p>
    <p className="">
      NOTE from CSUN: Currently CSUN uses license plate recognition software mounted on
      their parking vehicles that will read plates and see if a valid CSUN
      parking permit is associated to the vehicle parked on campus. Please make
      sure that you have a current license plate number attached to your parking
      permit (Semester, Annual, or Daily) at all times. Thank You!
    </p>
    <hr />
    <h2>Guide to Matapark</h2>
      <ul className="guide" style={{textAlign: 'left',listStyle: 'none'}}>
        <li><strong>Parking Information:</strong> <p style={{display:'inline-block'}}>Need basic information of where to go to park and the closest 
        kiosk to your lot? It's all here.</p></li>
        <li><strong>Parking Availability:</strong> <p style={{display:'inline-block'}}>Need a spot right now, but want to know how busy it is?
        Get the latest parking lot vacancy info here.</p></li>
        <li><strong>E.V. & Transportation:</strong> <p style={{display:'inline-block'}}>Not driving a car on campus? This is your source for all 
        Electric Vehicle and Alternative Transportation needs.</p></li>
        <li><strong>Locate Lot:</strong> <p style={{display:'inline-block'}}>Find the closest lot based on the building you want to go to by searching 
        or selecting it from our list.</p></li>
        <li><strong>Calculate:</strong> <p style={{display:'inline-block'}}>Paying for parking, but not sure if your getting the best deal? Try our 
        parking calculator to find out if you can save some money during your semester.</p> </li>
      </ul>
  </div>
);

function Homepage() {
  let nav = useNavigate();
  var [main, SetMain] = useState(MiddleContent);

  useEffect(() => {
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (!d.getElementById(id)) {
          js = d.createElement(s);
          js.id = id;
          js.src = "https://weatherwidget.io/js/widget.min.js";
          fjs.parentNode.insertBefore(js, fjs);
        }
      })(document, "script", "weatherwidget-io-js")
  }, [])

  return (

    <div className="d-flex justify-content-center">
      <div className="col-11">
        <div className="d-flex m-0 text-center text-white bg-black tab-header">
          <div
            className="col-3 py-4 highlight"
            onClick={(e) => {
              SetMain(<MiddleContent/>);
              $(".highlight").removeClass("highlight");
              $(e.target).addClass("highlight");
            }}
          >
            Home
          </div>
          <div
            className="col-3 py-4"
            onClick={(e) => {
              SetMain(<ParkingInfo/>);
              $(".highlight").removeClass("highlight");
              $(e.target).addClass("highlight");
            }}
          >
            Parking Information
          </div>
          <div
            className="col-3 py-4"
            onClick={(e) => {
							SetMain(<ParkingAvailability/>);
              $(".highlight").removeClass("highlight");
              $(e.target).addClass("highlight");
            }}
          >
            Parking Availability
          </div>
         
          <div
            className="col-3 py-4"
            onClick={(e) => {
							SetMain(<EVTransportation/>);
              $(".highlight").removeClass("highlight");
              $(e.target).addClass("highlight");
            }}
          >E.V. & Transportation</div>

        </div>

        <div className="row m-0">
          <div className="col grey">
            <br/>
            <a
              className="weatherwidget-io"
              href="https://forecast7.com/en/34d25n118d53/91330/?unit=us"
              data-label_1="CSU - NORTHRIDGE"
              data-label_2="WEATHER"
              data-font="Helvetica"
              data-icons="Climacons Animated"
              data-days="3"
              data-theme="weather_one"
            >
              CSU - NORTHRIDGE WEATHER
            </a>
            <br/>
            <div className="mb-1 font-big h2">Contact Us</div>
            <div className="">
              <strong><em>{`For Any Website Questions or Problems:`}</em></strong> <br/>
              <a href="mailto:matapark2022@gmail.com">{`Email the Team`}</a> <br/> <br/>
              
              
              <strong><em>{`All Other Issues with Parking Please Contact:`}</em></strong> <br/>
              {`Parking and Transportation Services`} <br/>
              {`Phone: (818) 677-2157 | `}
              <a href="mailto:parking@csun.edu">{`Email`}</a>
              <hr/>
              
              {`Cal State University, Northridge`} <br/>
              <em>{`18111 Nordhoff Street`}<br/> 
              {`Northridge, CA 91330-8290`} <br/>
              {`© Team Sensci 2022`} <br/></em>
            </div>
          </div>

						<div className="col-7">
							{main}
						</div>
          

          <div className="col grey pb-2">
            <div className="text-center mb-1 h2" style={{ fontSize: "27px" }}>
              Online Parking Services
            </div>
            <div className="row justify-content-center gy-1 btn-text">
              <button
                className="btn btn-danger col-10"
                onClick={() => nav("/BuyDailyPass")}
              >
                Buy Daily Pass
              </button>
              <button className="btn btn-danger col-10">Extend Pass</button>
              <button
                className="btn btn-danger col-10"
                onClick={() => nav("/LocateLot")}
              >
                Locate Lot
              </button>
              <button
                className="btn btn-danger col-10"
                onClick={() =>
                  (window.location.href =
                    "https://www.csun.edu/sites/default/files/student_refund_schedule_2022-2023.pdf")
                }
              >
                Purchase Semester Pass
              </button>
              <button
                className="btn btn-danger col-10"
                onClick={() => nav("/Calculate")}
              >
                Calculate (Semester vs Day to Day)
              </button>
							<button
                className="btn btn-danger col-10"
                onClick={() => nav("/ParkingTimer")}
              >
                Parking Timer
              </button>
            </div>
            <br/>
            {/* Notifications - Placeholder */}
            <div className="text-center mb-1 h2" style={{ fontSize: "27px" }}>
              Latest Parking Notifications
            </div>
            <div className="notifications">
                <ul style={{fontSize: "16px",color:"white"}}>
                <li><a className="notify" href="http://www.csun.edu/sites/default/files/LetterFromTheVicePresidentOfAdmin%26Finance.pdf" target="_blank">
                  A Message from Colin Donahue, Vice President for Administration Finance:Parking Permit Increase Notification</a></li><hr/>
                <li><a className="notify" href="http://www.csun.edu/sites/default/files/Parking%20Update%20-%20Los%20Angeles%20Mayor%20Eric%20Garcetti%27s%20State%20Of%20The%20City%20-%204%2014%202015_0.pdf">
                  Parking Update: Los Angeles Mayor Eric Garcetti's State Of The City</a></li><hr/>
                <li><a className="notify" href="http://www.csun.edu/sites/default/files/B5%20Parking%20Lot%20Maintenance%20-%204%208%202015.pdf">
                  B5 Slurry Closure and Parking Lot Maintenance 4/8/2015</a></li><hr/>
                <li><a className="notify" href="http://www.csun.edu/sites/default/files/B5%20slurry%20closure%20map_rev%20040315_4_0.pdf">
                  B5 Structure Closure Slurry Project</a></li>
                {/* <li><a className="notify" href="http://www.csun.edu/sites/default/files/Pilot%20Program%20-%20Short%20Term%20Visitor%20Parking%20Rates%20-%20Effective%202%2023%202015.pdf">
                  Short Term Visitor Parking Rates for F5, G3, and G4, G3 Structure 2/23/15</a></li>
                <li><a className="notify" href="http://www.csun.edu/sites/default/files/B5ClosureBroadcast6-23-14.pdf" target="_blank">
                  B5 Structure Lot Painting Cleaning Project Broadcast Message 6/23/14</a></li>
                <li><a className="notify" href="http://www.csun.edu/sites/default/files/B5ClosureMap.pdf" target="_blank">
                  B5 Structure Lot Painting Cleaning</a></li>
                <li><a className="notify" href="http://www.csun.edu/sites/default/files/TsengCollegeBroadcast61714.pdf" target="_blank">
                  Tseng College of Extended Learning Construction Project Broadcast Message 6/17/14</a></li>
                <li><a className="notify" href="http://www.csun.edu/sites/default/files/RelocationB4.pdf" target="_blank">
                  Tseng College of Extended Learning Construction Project</a></li> */}
                </ul>
            </div>
            {/* <iframe src="https://example.org" 
            title="Example Placeholder" 
            loading="lazy"
            sandbox="allow-scripts allow-downloads" 
            width="100%" 
            height="350"/> */}
          </div>

          {/* <footer className="sticky-bottom">
          <button
            className="btn btn-danger col-2 btn-text"
            style={{ position: "absolute", left: "75vw", bottom: "3vh" }}
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            Back to Top ^
          </button>
          <div
            className="row text-white bg-black"
            style={{ position: "absolute", width: "inherit" }}
          >
            <p>Created By Team Sensci - Fall 2022</p>
          </div>
        </footer> */}
        </div>
      </div>
    </div>
  );
}



export default Homepage;
