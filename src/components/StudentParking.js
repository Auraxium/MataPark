import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function StudentParking() {
    let nav = useNavigate();
    return (
        <div className="container">
            <div className="row text-center text-white bg-black ">
                <div className="col-3 py-4 highlight">Student Parking</div>
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
                    Student Parking Information
                </div>
                <img
                src="./Images/ParkingB1.png"
                alt="" position='absolute'/>
                <img
                src="./Images/ParkingB3.png"
                alt="" position='absolute' width='80%' style={{aspectRatio: "16/7"}}/>
                <img
                src="./Images/ParkingB5.png"
                alt="" position='absolute' width='80%' style={{aspectRatio: "16/7"}}/>
                <img
                src="./Images/ParkingB6.png"
                alt="" position='absolute' width='80%' style={{aspectRatio: "16/7"}}/>
                <p>
                Students can purchase a semester permit or a daily parking permit to park. Student parking lots are: 
                    <ul>
                        <li>Lots B1, B3 parking structure & B5 parking structure, located off of Darby Street. </li>
                        <li>Lot B6, located off Plummer Street </li>
                        <li>Lot E6 on Halsted Street. </li>
                        <li>Lot F5</li>
                        <li>Lots G3 and G3 parking structure, located off Zelzah Street.</li>
                        <li>Lots F10, and G12 </li>
                        <li>The UPA Parking Structure G9 is available until 7:30pm, for non-resident student parking.  
                            After 7:30pm, access is restricted to Housing residents, ONLY. </li> 
                    </ul>
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

export default StudentParking;