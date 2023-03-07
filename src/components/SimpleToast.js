import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";

/* To use: 
<SimpleToast
 title = "String"
 message = "messageString"
 imageSrc = "image link"
/> */

function SimpleToast(props) {
    const { title, message, imageSrc } = props;
	const [show, setShow] = useState(true);
	const toggleShow = () => setShow(!show);
    const now = new Date();
    const currentTime = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

	return (
			<Toast show={show} onClose={toggleShow}>
				<Toast.Header>
					<img src={imageSrc} className="rounded me-2" alt="" />
					<strong className="me-auto">{title}</strong>
					<small>{currentTime}</small>
				</Toast.Header>
				<Toast.Body>{message}</Toast.Body>
			</Toast>
	);
}

export default SimpleToast;