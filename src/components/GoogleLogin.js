import React,{ useRef } from "react";

function GoogleLogin() {
	const contentRef = useRef(null);
	const onSignIn = (googleUser) => {
		console.log("User is", googleUser.getBasicProfile());

		if(contentRef.current){
			contentRef.current.innerText = googleUser.getBasicProfile().getGivenName();
		}
	};

	const signOut = () => {
		const auth2 = window.gapi.auth2.getAuthInstance();
		auth2.signOut().then(() => {
			console.log("User signed out.");
		});
	};

	return (
		<div>
			<h1>Google Lasdogin</h1>
			<div className="g-signin2" data-onsuccess={onSignIn}></div>
			<div red={contentRef}></div>
			<button onClick={signOut}>Sign Out</button>
		</div>
	);
}

export default GoogleLogin;
