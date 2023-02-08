import React,{useState} from "react";
import "../styles/ParkingTimer.css";

function ParkingTimer() {
    const [isActive, setIsActive] = useState(false);
    const btnClick = () => {
        setIsActive(!isActive);
    }
    return (
      <div className="container mt-4">
        <div className="col">
          <div className="text-center text-light mb-2 bg py-4 rounded-3 border shadow">
            <h1 className="fw-bold display-5">Parking Timer</h1>
            <h3>Don't remember how long you parked your car? We got you!</h3>
          </div>
          <div className="row text-center">
              <div className="col mt-4" style={{ borderRight: '3px solid grey', height: '60vh' }}>
                <p className="">
                    <strong>If you parked on campus:</strong> <br/>
                    Press the button corresponding to the hours for your ticket to start a timer now <br/>
                    or tell us approximately when you arrived and how long your ticket is for and we will
                    remind you about 20 minutes before it expires.
                </p>
                <div class="btn-group btn-group-lg mb-4" role="group" aria-label="Parking Hour Timer">
                    <button type="button" class={isActive ? 'btn btn-primary active' : 'btn btn-primary'}
                        onClick={() => {alert('1 Hour Button was clicked!');btnClick();}} 
                        style={{ borderRight: '3px dotted blue'}}>
                        1 Hour</button>
                    <button type="button" className={isActive ? 'btn btn-primary active' : 'btn btn-primary'}
                        onClick={() => {alert('2 Hours Button was clicked!');btnClick();}} 
                        style={{ borderRight: '3px dotted blue'}}>
                        2 Hours</button>
                    <button type="button" className={isActive ? 'btn btn-primary active' : 'btn btn-primary'} 
                        onClick={() => {alert('4 Hours Button was clicked!');btnClick();}} 
                        style={{ borderRight: '3px dotted blue'}}>
                        4 Hours</button>
                    <button type="button" className={isActive ? 'btn btn-primary active' : 'btn btn-primary'} 
                        onClick={() => {alert('All Day Button was clicked!');btnClick();}}>
                        All Day</button>
                </div>

                <p><strong>OR</strong></p>

                <form class="row gy-2 gx-3 align-items-center justify-content-center mt-4">
                    <div class="col-auto">
                        <label class="visually-hidden" for="TicketHours">Time Parked</label>
                            <div class="input-group">
                            <div class="input-group-text">Time Parked</div>
                            <input type="time" class="form-control" id="TicketHours" placeholder="Choose Time" defaultValue="09:00"/>
                            </div>
                    </div>
                    <div class="col-auto">
                        <label class="visually-hidden" for="TicketHours">Ticket Hours</label>
                        <select class="form-select" id="TicketHours" required>
                            <option value="" disabled selected hidden>Hours of Ticket...</option>
                            <option value="1">1 Hour</option>
                            <option value="2">2 Hours</option>
                            <option value="4">4 Hours</option>
                            <option value="24">All Day</option>
                        </select>
                    </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
                </form>
              </div>
              <div className="col mt-4">
                <p className="">
                    <strong>If you parked on the street:</strong> <br/>
                    Tell us when you arrived,how much time you can park there,and when you'd like to be reminded.
                    We'll let you know when you need to leave so you have a peace of mind - no tickets today!
                    
                </p>
              </div>
          </div>
          </div>
      </div>
    );
  }
  export default ParkingTimer;