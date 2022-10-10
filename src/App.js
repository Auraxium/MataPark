import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import axios from "axios";

var port = "http://localhost:8080";

const PermitUI = (props) => (
  <div className="border">
    <p className="lead">License: {props.data.license}</p>
    <p className="lead">Expires: {props.data.expires}</p>
    <button href="" onClick={() => props.delete(props.data._id)} >delete</button>
  </div>
);

function App() {
  let permits = [];

  useEffect(() => {
    axios.get(port + "/load").then((res) => {
      permits = res.data;
      console.log(permits);
      ListPermits();
    });
  }, []);

  function deletePermit(id) {
    console.log("i ran")
    axios.delete(port + "/delete/" + id).then(() => console.log("Deleted permit").catch((err) => console.log("Failed to delete: " + err)));
    permits = permits.filter(el => el._id !== id)
    ListPermits();
  }

  function ListPermits() {
    ReactDOM.render(
      permits.map((i) => <PermitUI data={i} key={i._id} delete={deletePermit}/>),
      document.getElementById("msg")
    );
  }

  function onSubmit() {
    let permit = { license: $("#license").val(), expires: $("#hours").val() };
    permits.push(permit);
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
