import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Carousel } from 'react-carousel-minimal';
import B1 from "./Images/ParkingB1.png";
import B3 from "./Images/ParkingB3.png";
import B5 from "./Images/ParkingB5.png";
import B6 from "./Images/ParkingB6.png";

const data = [
  {
    image: B1,
    caption: "B1 Parking"
  },
  {
    image: B3,
    caption: "B3 Parking"
  },
  {
    image: B5,
    caption: "B5 Parking"
  },
  {
    image: B6,
    caption: "B6 Parking"
  }
];

const captionStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
}
const slideNumberStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
}

function ParkingInfo() {
  return (
    <>
      <div className="col-7 ">
        <div className="" style={{ fontSize: "27px" }}>
          <h1>Parking Information</h1>
        </div>
        {/* Carousel */}
        <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={4000}
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
              margin: "40px auto"
            }}
          />
        </div>
      </div>
    </div>

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
