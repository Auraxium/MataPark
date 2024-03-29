import React from "react";
import $ from "jquery";

function Calculate() {
    const Field = (props) => (
        <div className="form-group">
          <label>{names[props.index]}</label>
          <select
            onChange={e => days[props.index] = parseFloat(e.target.value)}
            className="form-control"
                  defaultValue={0}
          >
            <option value="0">Not coming</option>
            <option value="3">1hr</option>
            <option value="5.5">2hr</option>
            <option value="7.5">2-4hr</option>
            <option value="9.5">4+hr</option>
          </select>
        </div>
      );
      
  var names = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  var days = [0, 0, 0, 0, 0, 0, 0];
  var comb = [0];

  function calu() {
    console.log(days)
    let alertMessage = `It would cost you: $${
      days.reduce((sum, a) => sum + a) * +comb
    } total. Currently the parking pass for the semester is about $ 
    
      ${comb == 16 ? 220: comb == 12 ? 165: comb == 9 ? 110: comb  == 4 ? 55: 220}
      `
    //alert(alertMessage);
    $('#result').html(alertMessage)
  }
  return (
    <div className="container">
      <div className="col text-center">
        <div className="" style={{ fontSize: "27px" }}>
          <h1>Calculator</h1>
          <h3>Compare daily pass to semester pass</h3>
        </div>

        <p className="mt-4">
          Below select the hours you plan to be at school, be mindful of gaps.
          Not all lots offer 1hr options find a designated ticket dispenser
        </p>

        <label>
          What week are you in the semester?
          <select
          onChange={e => comb = ( +e.target.value)
          }
          defaultValue ='0'>
            <option value ='0'> N/A</option>
            <option value= '16'> 1st-4th weeks</option> 
            <option value= '12'> 5th-8th weeks</option> 
            <option value= '9'> 9th-12th weeks</option> 
            <option value= '4'> 13th-end of semester</option> 
          </select>

        </label>
        
        {days.map((e, i) => (
          <Field index={i} key={i}/>
        ))}

        <button type="button" onClick={() => calu()}>
          Calculate
        </button>

				<div className="mt-3" id="result" style={{ fontSize: "27px" }}></div>
      </div>
    </div>
  );
}
export default Calculate;