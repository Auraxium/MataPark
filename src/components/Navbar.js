import React from "react";
import { Link,useNavigate } from 'react-router-dom';

export default function Navbar() {
  let nav = useNavigate()
  return (
    <div className="row col-12 bg-danger">
      <h1 className="" onClick={() => nav("/")}> MataPark </h1>
    </div>

  );
}
