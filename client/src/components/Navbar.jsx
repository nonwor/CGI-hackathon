import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <Link to="/Home">Home</Link>
      <Link to="/Game">Game</Link>
      <Link to="/Questions">Questions</Link>
      <Link to="/Admin">Admin</Link>
    </div>
  );
}
