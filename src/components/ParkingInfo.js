import React from 'react'
import { Link, useNavigate } from "react-router-dom";

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

                <div className="col-7 text-center ">
                <div className="" style={{ fontSize: "27px" }}>
                    Student Parking Information
                </div>

                {/* <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="..." class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div> */}
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