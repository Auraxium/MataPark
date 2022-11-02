import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Homepage() {
  let nav = useNavigate();
  return (
    <div className="container">
      <div className="row text-center text-white bg-black ">
        <div className="col-3 py-4">Student Parking</div>
        <div className="col-3 py-4">Faculty/Staff Parking</div>
        <div className="col-3 py-4">Visitor Parking</div>
        <div className="col-3 py-4">Diasability Parking</div>
      </div>

      <div className="row">
        <div className="col grey">
          <div className="mb-1 font-big">Contact Us</div>
          <p className="">
            {`Parking and Transportation Services
              © California State University, Northridge
              18111 Nordhoff Street, Northridge, CA 91330
              Phone: (818) 677-1200 / Contact Us`}
          </p>
        </div>

        <div className="col-7 text-center ">
          <div className="" style={{ fontSize: "27px" }}>
            Parking Information
          </div>
          <img
          src="https://www.csun.edu/sites/default/files/field_image/field_slideshow_slides/_OGF1846-Edit-Edit%20-%20PEO_0.jpg"
          alt="" position='absolute' width='80%' style={{aspectRatio: "16/7"}}/>
          <p className="mt-4">
            CSUN has transitioned to a “virtual parking permit campus” using the
            license plate number of the vehicle in place of a physical parking
            decal. All CSUN Parking Permits are all now virtual parking permits.
            (No physical decal will be issued).
          </p>
          <p className="">
            The License plate recognition software mounted on the parking
            vehicles will read plates and see if a valid CSUN parking permit is
            associated to the vehicle parked on campus. Please make sure that
            you have a current license plate number attached to your parking
            permit at all times.
          </p>
        </div>

        <div className="col grey pb-2">
          <div className="text-center mb-1" style={{ fontSize: "27px" }}>
            Online Parking Services
          </div>
          <div className="row justify-content-center gy-1">
            <button
              className="btn btn-danger col-10"
              onClick={() => nav("/BuyDailyPass")}
            >
              Buy Daily Pass
            </button>
            <button className="btn btn-danger col-10">Extend Pass</button>
            <button className="btn btn-danger col-10">Locate lot</button>
            <button className="btn btn-danger col-10">
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
      </div>
    </div>
  );
}

export default Homepage;
