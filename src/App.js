import 'bootstrap/dist/css/bootstrap.css';
import {useEffect} from 'react'
import $ from 'jquery'
import axios from 'axios'

var port = "http://localhost:8080"

function App() {
	let permits = [];

	useEffect(() => {
		
	}, [])

	function onSubmit() {
		let permit = {'license': $('#license').val(), 'expires': $('#hours').val()}
			permits.push(permit)
			let str = '';
			$('#msg').html(() => {for (let i = 0; i < permits.length; i++) {
					
					str += JSON.stringify(permits[i]) + "<br/>"
				}
				return str}
				)

			axios.post(port + "/save", permit).then(() => console.log("saved")).catch(() => console.log("failed"))
	}

  return (
    <>
			<div className="bg-danger">
				<h1 className=""> MataPark </h1>
			</div>

			<div className="row col-5 px-3">
				<div>License Plate</div>
				<input className='form-control mb-3' id='license'></input>
				<div>Hours</div>
				<input className='form-control mb-3' id='hours'></input>
				<button className="btn btn-secondary" onClick={onSubmit}>Submit</button>
				<div id="msg" className='d-flex flex-column'></div>
			</div>
		</>
  );
}

export default App;
