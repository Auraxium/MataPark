import React from "react";
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

export default function Navbar() {
  let nav = useNavigate()
  return (
    <div className="bg-danger">
      <h1 className="" onClick={() => nav("/")}> MataPark </h1>
    </div>

  );
}
