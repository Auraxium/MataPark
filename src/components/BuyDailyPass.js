import { useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import axios from "axios";

import port from '../port'

const PermitUI = (props) => (
  <div className="border col" id={`${props.data._id}`}>
    <p className="lead">License: {props.data.license}</p>
    <p className="lead">Expires: {props.data.expires}</p>
    <button className="btn btn-danger" onClick={(e) => {
      props.delete(props.data._id);
      $(`#${props.data._id}`).remove();
      }}>Delete
    </button>
  </div>
);

function BuyDailyPass() {
  let permits = [];

	localStorage.clear();

  useEffect(() => {
    ListPermits();
  }, []);

  function deletePermit(id) {
    axios
      .delete(port + "/delete/" + id)
      .then(() => console.log("asd"))
      .catch((err) => console.log("Failed to delete: " + err));
  }

  function ListPermits() {
    axios
      .get(port + "/load")
      .then((res) => {
        permits = res.data;
        console.log(permits);
        ReactDOM.render(
          permits.map((i) => (
            <PermitUI data={i} key={crypto.randomUUID()} delete={deletePermit} />
          )),
          document.getElementById("msg")
        );
      })
      .catch((err) => console.log("Falied to get: " + err));
  }

  function onSubmit() {
    let permit = { license: $("#license").val(), expires: $("#hours").val()};

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
    < div className="row">
      <div className="col-5">
        <div>License Plate</div>
        <input className="form-control" id="license"></input>
        <div>Time</div>
        <input className="form-control" id="hours"></input>
        <button className="btn btn-secondary" onClick={onSubmit}>
          Submit
        </button>
      </div>
      <div id="msg" className="col-7 flex-column-reverse mt-3"></div>
    </div>
    </>
  );
}

export default BuyDailyPass;
