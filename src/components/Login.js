import React, { useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from 'gapi-script'

const clientId =
  "719494722130-n99p2h6d0masuhqijn6u4gdu7174ofir.apps.googleusercontent.com";


const Logi = () => (
  <div id="signInButton">
    <GoogleLogout
      clientId={clientId}
      buttonText="Login"
      onSuccess={(res) => console.log("Login succ: " + res.profileObj)}
      onFailure={(res) => console.log("Login fail: " + res)}
      cookiePolicy={"single_host_origin"}
      isSingedIn={true}
    />
  </div>
);

const Logo = () => (
  <div id="signOutButton">
    <GoogleLogin
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={() => console.log('logged out')}
    />
  </div>
);

export default function Login() {

	useEffect(() => {
		gapi.load('client:auth2', () => {
			gapi.auth2.init({
				clientId: clientId,
				scope: ""
			})
		})
	}, [])
  
  return (
    <div>
      <h1>Login Page</h1>
			<Logi/>
			<Logo/>
    </div>
  );
}
