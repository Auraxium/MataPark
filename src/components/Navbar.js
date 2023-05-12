import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Clock from "react-live-clock";
import axios from "axios";
import port from "../port";
import $ from "jquery";
import AccountMenu from "./AccountMenu";
import { useMediaQuery } from "react-responsive";

export default function Navbar() {
	const isSmallMobile = useMediaQuery({ maxWidth: 375 });
	let nav = useNavigate();
	return (
		<div
			className="navb bg-danger mb-2 p-1 d-flex text-white align-items-center"
			style={{ margin: 0, padding: 0, width: "100vw" }}
		>
			<div className="col row">
				<h1
					className="col-auto"
					style={{ cursor: "pointer" }}
					onClick={() => {
						nav("/");
					}}
				>
					MataPark
				</h1>
			</div>

			<Clock
				className="col text-center"
				format={"h:mm A"}
				ticking={true}
				timezone={"US/Pacific"}
				style={{ fontSize: isSmallMobile ? "1.2em" : "1.5em" }}
			/>

			<div className="col row justify-content-end mx-0">
				<h2
					className="col-auto nav-names text-end"
					style={{ cursor: "pointer" }}
					onClick={() => {
						if (!localStorage.getItem("googToken")) {
							let uuid = crypto.randomUUID();
							localStorage.setItem("googUUID", uuid);
							axios
								.post(port + "/googOauth", {
									uuid: uuid,
									origin: window.location.origin,
								})
								.then((ax) => (window.location.href = ax.data.url))
								.catch(console.log);
						} else {
							localStorage.removeItem("googToken");
							$(".nav-names").html("Logged Out");
						}
					}}
				>
					Login
				</h2>
			</div>
		</div>
	);
}
