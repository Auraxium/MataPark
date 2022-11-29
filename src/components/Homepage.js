import React from "react";
import ParkingInfo from "./ParkingInfo";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";

const delay = (secs) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(""), secs));


const MiddleContent = () => (
  <div className="col-7 text-center m-0">
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
      NOTE: Currently CSUN uses license plate recognition software mounted on
      their parking vehicles that will read plates and see if a valid CSUN
      parking permit is associated to the vehicle parked on campus. Please make
      sure that you have a current license plate number attached to your parking
      permit (Semester, Annual, or Daily) at all times. Thank You!
    </p>
    <hr />
  </div>
);

function Homepage() {
  let nav = useNavigate();
  var [main, SetMain] = useState(MiddleContent);

  useEffect(() => {
    (async ( )=> {
      await delay(4000);
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (!d.getElementById(id)) {
          js = d.createElement(s);
          js.id = id;
          js.src = "https://weatherwidget.io/js/widget.min.js";
          fjs.parentNode.insertBefore(js, fjs);
        }
      })(document, "script", "weatherwidget-io-js")()
    })()
    
  }, [])

  return (
    <div className="d-flex justify-content-center">
      <div className="col-11">
        <div className="d-flex m-0 text-center text-white bg-black tab-header">
          <div
            className="col-3 py-4 highlight"
            onClick={(e) => {
              SetMain(MiddleContent);
              $(".highlight").toggleClass("highlight");
              $(e.target).addClass("highlight");
            }}
          >
            Home
          </div>
          <div
            className="col-3 py-4"
            onClick={(e) => {
              SetMain(ParkingInfo);
              $(".highlight").toggleClass("highlight");
              $(e.target).addClass("highlight");
            }}
          >
            Parking Information
          </div>
          <div
            className="col-3 py-4"
            // onClick={(e) => {
            //   $(".highlight").toggleClass("highlight");
            //   $(e.target).addClass("highlight");
            // }}
          >
            Parking Availability
          </div>
          <div
            className="col-3 py-4"
            // onClick={(e) => {
            //   $(".highlight").toggleClass("highlight");
            //   $(e.target).addClass("highlight");
            // }}
          >
            Accessibility
          </div>
        </div>

        <div className="row m-0">
          <div className="col grey">
            <a
              class="weatherwidget-io"
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
            <div className="mb-1 font-big h2">Contact Us</div>
            <p className="">
              {`Parking and Transportation Services
              © California State University, Northridge
              18111 Nordhoff Street, Northridge, CA 91330
              Phone: (818) 677-1200 / Contact Us`}
            </p>
          </div>

          {main}

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
            </div>
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
