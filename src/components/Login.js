import React from 'react'

export default function Login() {
  
  return (
    
    <div>

        <h1>Login form</h1>
      
       <label for="yourname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" 
        name="yourname" required></input><br/>
<br/>
        <label for="yourpassword"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" 
        name="yourpassword" required></input><br/>
<br/>
        <button type="submit">Login</button>


    </div>

    
    
  );
}
