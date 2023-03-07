import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

/* To use: 
<WarningAlert
 title = "String"
 message = "messageString"
/> */

function WarningAlert(props) {
	const { title, message } = props;
	const [show, setShow] = useState(true);
	const toggleShow = () => setShow(!show);

	return (
		<Alert variant="danger" show={show} onClose={toggleShow} dismissible>
			<Alert.Heading>{title}</Alert.Heading>
      <hr/>
			<p>{message}</p>
		</Alert>
	);
}

export default WarningAlert;
