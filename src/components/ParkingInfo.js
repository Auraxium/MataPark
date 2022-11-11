import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import B1 from './Images/ParkingB1.png'
import B3 from './Images/ParkingB3.png'
import B5 from './Images/ParkingB5.png'
import B6 from './Images/ParkingB6.png'

function StudentParking() {
    let nav = useNavigate();
    return (
        <div className="container">
            <div className="row text-center text-white bg-black ">
                <div className="col-3 py-4 highlight" onClick={() => nav("/ParkingInfo")}>Parking Information</div>
                <div className="col-3 py-4" onClick={() => nav("/Calculate")}>Permit Calculator</div>
                <div className="col-3 py-4">Parking Availability</div>
                <div className="col-3 py-4">Accessibility</div>
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

                <div className="col-7 ">
                <div className="" style={{ fontSize: "27px" }}>
                    <h1>Parking Information</h1>
                </div>

                <p>Students can purchase a semester permit or a daily parking permit to park. Student parking lots are: </p>
                    <ul>
                        <img src={B1} alt="B1 Parking Lot" width='40%'/>
                        <img src={B3} alt="B3 Parking Lot" width='40%'/>
                        <img src={B5} alt="B5 Parking Lot" width='40%'/>
                        <img src={B6} alt="B6 Parking Lot" width='40%'/>
                        <li>Lots B1, B3 parking structure & B5 parking structure, located off of Darby Street. </li>
                        <li>Lot B6, located off Plummer Street </li>
                        <li>Lot E6 on Halsted Street. </li>
                        <li>Lot F5</li>
                        <li>Lots G3 and G3 parking structure, located off Zelzah Street.</li>
                        <li>Lots F10, and G12 </li>
                        <li>The UPA Parking Structure G9 is available until 7:30pm, for non-resident student parking.  
                            After 7:30pm, access is restricted to Housing residents, ONLY. </li> 
                    </ul>
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
                    {/* <button className="btn btn-danger col-10">Locate lot</button> */}
                    <button className="btn btn-danger col-10">
                    Purchase Semester Pass
                    </button>
                </div>
                </div>
                <footer className="sticky-bottom">
                <button
              className="btn btn-danger col-2" style=
              {{"position": "absolute",
              "left": "75vw",
              "bottom":"3vh"}}
              onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
              }}
            >
              Back to Top ^
            </button>
            <div className="row text-white bg-black" style=
              {{"position": "absolute",
              "width": "inherit"
              }}>
              <p>Created By Team Sensci - Fall 2022</p>
            </div>
        </footer>
            </div>
        </div>
    );
}

export default StudentParking;