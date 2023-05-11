import React, { useState } from "react";

const Lot = ({ name, status, onUpdateStatus }) => {
	const [report, setReport] = useState(null);

	const handleUpdateStatus = (status) => {
		const reportTime = new Date().toLocaleString();
		setReport(reportTime);
		onUpdateStatus(status, reportTime);
	};

	return (
		<tr>
			<td>{name}</td>
			<td>{status}</td>
			<td>
				<button
					className="btn btn-danger"
					onClick={() => handleUpdateStatus("Full")}
				>
					Full
				</button>
			</td>
			<td>
				<button
					className="btn btn-warning"
					onClick={() => handleUpdateStatus("Almost Full")}
				>
					Almost Full
				</button>
			</td>
			<td>
				<button
					className="btn btn-success"
					onClick={() => handleUpdateStatus("OK")}
				>
					OK
				</button>
			</td>
			<td>{report}</td>
		</tr>
	);
};

const LotStatus = () => {
	const [lots, setLots] = useState([
		{ name: "B1", status: "OK" },
		{ name: "B6", status: "OK" },
		{ name: "E6", status: "OK" },
		{ name: "F5", status: "OK" },
		{ name: "F10", status: "OK" },
		{ name: "G3", status: "OK" },
		{ name: "G12", status: "OK" },
	]);

	const handleUpdateStatus = (name, status, reportTime) => {
		const newLots = lots.map((lot) =>
			lot.name === name ? { ...lot, status, reportTime } : lot
		);
		setLots(newLots);
	};

	return (
		<div className="container my-4">
			<h3 className="text-center mb-4">Lot Status</h3>
			<div className="table-responsive">
				<table className="table table-bordered">
					<thead>
						<tr>
							<th>Lot Name</th>
							<th>Current Status</th>
							<th>Full</th>
							<th>Almost Full</th>
							<th>OK</th>
							<th>Last Report Time</th>
						</tr>
					</thead>
					<tbody>
						{lots.map((lot) => (
							<Lot
								key={lot.name}
								name={lot.name}
								status={lot.status}
								onUpdateStatus={(status, reportTime) =>
									handleUpdateStatus(lot.name, status, reportTime)
								}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default LotStatus;
