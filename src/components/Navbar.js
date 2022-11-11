import React from "react";
import { Link,useNavigate } from 'react-router-dom';

export default function Navbar() {
  let nav = useNavigate()
  return (
   <>
    <div className="btn-danger mb-2 p-1 text-white row justify-content-between">
      <h1 className="col-2" style={{"cursor": "pointer", "text-align":"left","display": "inline-block","margin-left": "1rem"}} onClick={() => nav("/")}>MataPark</h1>
      <h2 className="col-2" style={{"cursor": "pointer","text-align":"right", "display": "inline-block","margin-right": "1rem","margin-top": "0.5rem"}} onClick={() => nav("/Login")}>Login</h2>
    </div>
  </>

  );
}
