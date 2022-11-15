import React from "react";
import { useState } from "react";
import $ from 'jquery'
import '../styles.css'

let buildings = [
  {name: "Art and Design Center", lot: "D6"},
  {name: `Bayramian Hall`, lot: "B4 or B5"},
  {name: `Brown Center`, lot: "B5"},
  {name: `Citrus Hall`, lot: "G3"},
  {name: `Cypress Hall`, lot: "B1"},
  {name: `Eisner Education`, lot: "B5"},
  {name: `Eucalyptus Hall`, lot: "G3"},
  {name: `Extended Learning University Building`, lot: "B5"},
  {name: `Jacaranda Hall`, lot: "B5"},
  {name: `Jeanne Chisholm Hall`, lot: "G3"},
  {name: `Jerome Richfield Hall`, lot: "B3"},
  {name: `Bookstein Hall (former Juniper Hall)`, lot: "B5"},
  {name: `Klotz Student Health Center`, lot: "G4"},
  {name: `Live Oak Hall`, lot: "G3"},
  {name: `Magnolia Hall`, lot: "G3"},
  {name: `Manzanita Hall`, lot: "B2"},
  {name: `Matador Bookstore Complex`, lot: "G3"},
  {name: `Matador Hall`, lot: "E6"},
  {name: `Monterey Hall`, lot: "G1"},
  {name: `Nordhoff Hall`, lot: "B1"},
  {name: `Noski Auditorium`, lot: "B5"},
  {name: `University Library`, lot: "B4"},
  // {name: `Planetarium`, lot: " ASC"},
  {name: `Police Services Building`, lot: "B3"},
  {name: `Redwood Hall`, lot: "F5"},
  {name: `Santa Susana Hall`, lot: "B3"},
  {name: `Sequoia Hall`, lot: "G4"},
  {name: `Sierra Center`, lot: "B3"},
  {name: `Sierra Hall`, lot: "B3"},
  {name: `Sierra Tower`, lot: "B3"},
];

var curr = null;

const BuildingUI = (props) => (
  <div className="lead p-2 col-auto" style={{border: "1px solid", fontSize: '28px'}} id={props.ind} onClick={(e) => {
    $('.tt').removeClass('tt');
    $(e.target).addClass('tt')
    $('#result').html(`Best parking lot to ${props.name.fontcolor('#ff0000')} is ${('lot '+props.ele.lot).fontcolor('#ff0000')}`)
  }} 
  // onPointerEnter={e => $(e.target ).css("background-color", "grey")}
  // onPointerLeave={e => $(e.target).css("background-color", "black")}
  >
    {props.name}
  </div>
)


export default function LocateLot() {
  var [buildState, SetBuildState] = useState(buildings)
  var ListBuildings = () => buildState.map((el, i) => <BuildingUI name={el.name} ind={i} ele={el}/>)


  return (
    <>
      <div className="container lead row mx-0">
        <div className="col-auto ">
          <img
            className=""
            src="https://www.csun.edu/sites/default/files/campus_map_1122021_960.jpg"
            width={500}
            height={500}
            alt=""
            style={{ objectFit: "none", objectPosition: "20% 90%" }}
          />
        </div>

        <div className="col-4">
          <div className="">Search building name</div>
          <input className='form-control mb-1' type="text" onChange={(e) => {
            SetBuildState(buildings.filter(el => el.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())))
          }} />
          <div className="" style={{maxHeight: '500px', overflow: 'scroll'}}>
           {ListBuildings()}
          </div>
        </div>

        <div className="col" style={{fontSize: '40px'}} id="result">

        </div>
      </div>
    </>
  );
}
