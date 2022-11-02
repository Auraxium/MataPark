import React from "react";
import { Link,useNavigate } from 'react-router-dom';

export default function Navbar() {
  let nav = useNavigate()
  return (
   <>
    <div className="bg-danger mb-2 p-1 text-white">
      <h1 className="col-2" style={{"cursor": "pointer"}} onClick={() => nav("/")}>MataPark</h1>
    </div>
  </>

  );
}
