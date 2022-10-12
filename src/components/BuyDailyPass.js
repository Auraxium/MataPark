import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import axios from "axios";

import port from '../port'

const PermitUI = (props) => (
  <div className="border" id={`${props.data._id}`}>
    <p className="lead">License: {props.data.license}</p>
    <p className="lead">Expires: {props.data.expires}</p>
    <button href="" onClick={(e) => {
      props.delete(props.data._id);
      $(e.target.parent).remove()
      }}>delete
    </button>
  </div>
);

function BuyDailyPass() {
  let permits = [];

  useEffect(() => {
    ListPermits();
  }, []);

  function deletePermit(id) {
    axios
      .delete(port + "/delete/" + id)
      .then(() => console.log("asd"))
      .catch((err) => console.log("Failed to delete: " + err));
    permits = permits.filter((el) => el._id !== id);
  }

  function ListPermits() {
    axios
      .get(port + "/load")
      .then((res) => {
        permits = res.data;
        console.log(permits);
        ReactDOM.render(
          permits.map((i) => (
            <PermitUI data={i} key={i._id} delete={deletePermit} />
          )),
          document.getElementById("msg")
        );
      })
      .catch((err) => console.log("Falied to get: " + err));
  }

  function onSubmit() {
    let permit = { license: $("#license").val(), expires: $("#hours").val()};
    //permits.push(permit);

    axios
      .post(port + "/save", permit)
      .then(() => {
        console.log("saved");
        ListPermits();
      })
      .catch(() => console.log("failed"));
  }

  return (
    <>
      <div className="row col-5 px-3">
        <div>License Plate</div>
        <input className="form-control mb-3" id="license"></input>
        <div>Time</div>
        <input className="form-control mb-3" id="hours"></input>
        <button className="btn btn-secondary" onClick={onSubmit}>
          Submit
        </button>
        <div id="msg" className="d-flex flex-column"></div>
      </div>
    </>
  );
}

export default BuyDailyPass;
