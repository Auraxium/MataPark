import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import axios from "axios";

var port = "http://localhost:8080";

const PermitUI = (props) => (
  <div className="border">
    <p className="lead">License: {props.ind.license}</p>
    <p className="lead">Expires: {props.ind.expires}</p>
    <a href="#" onClick={props.delete} >delete</a>
  </div>
);

function App() {
  let permits = [];

  useEffect(() => {
    axios.get(port + "/load").then((res) => {
      permits = res.data;
      console.log(permits);v 
      let str = "";
      //$('#msg').html(() => {for (let i = 0; i < permits.length; i++)
      //	str += JSON.stringify(permits[i]) + "<br/>"

      ListPermits();

      //return str
      //})
    });
  }, []);

  function deletePermit(id) {
    axios.delete(port + "/delete/" + id);
    ListPermits();
  }

  function ListPermits() {
    ReactDOM.render(
      permits.map((i) => <PermitUI ind={i} key={i._id} delete={deletePermit(i._id)}/>),
      document.getElementById("msg")
    );
  }

  function onSubmit() {
    let permit = { license: $("#license").val(), expires: $("#hours").val() };
    permits.push(permit);
    let str = "";
    //$('#msg').html(() => {for (let i = 0; i < permits.length; i++)
    //		str += JSON.stringify(permits[i]) + "<br/>"
    //
    //	return str
    //})
    ListPermits();

    axios
      .post(port + "/save", permit)
      .then(() => console.log("saved"))
      .catch(() => console.log("failed"));
  }

  return (
    <>
      <div className="bg-danger">
        <h1 className=""> MataPark </h1>
      </div>

      <div className="row col-5 px-3">
        <div>License Plate</div>
        <input className="form-control mb-3" id="license"></input>
        <div>Hours</div>
        <input className="form-control mb-3" id="hours"></input>
        <button className="btn btn-secondary" onClick={onSubmit}>
          Submit
        </button>
        <div id="msg" className="d-flex flex-column"></div>
      </div>
    </>
  );
}

export default App;
