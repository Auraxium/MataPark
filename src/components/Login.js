import React from "react";
import GoogleLogin from "./GoogleLogin";

export default function Login() {
  return (
    <div>
        <h1>Registration form</h1>
      
      <label for="yourname"><b>Email: </b></label>
       <input type="text" placeholder="Enter Email" 
       name="yourname" required></input><br/>
<br/>
       <label for="yourpassword"><b>Password:</b></label>
       <input type="password" placeholder="Enter Password" 
       name="yourpassword" required></input><br/>
<br/>


<br/>
       <label for = "Parking Type">Choose Parking:
       </label>
       <select name="car" id ="cars">
         <option value="GeneralParking">General Parking</option>
         <option value="HandicapParking">Handicap</option>
         <option value="MotorVehicle">MotorVehicle</option>
         <option value="StaffParking">Staff Parking</option>
       </select>
       <br></br>
       <br></br>
       <br></br>

      <button type="submit">Submit</button>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

<p>Or Create a login with:</p>
<GoogleLogin/>
    </div>
  );
}
