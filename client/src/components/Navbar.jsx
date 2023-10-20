import React, { useContext } from "react";
import { PrimaryContext } from "./context/PrimaryContext";
import "./NavBar.css";
import { Link } from "react-router-dom";


export default function NavBar() {

  const {isAdmin} = useContext(PrimaryContext);

  return (
    <div className="nav-bar">
      {isAdmin ? (
        <>  
          <Link to="/Home">Home</Link>
          <Link to="/Game">Game</Link>
          <Link to="/Questions">Questions</Link>
          <Link to="/Admin">Admin</Link>
        </>
      ) : (
        <>
          <Link to="/Home">Home</Link>
          <Link to="/Questions">Questions</Link>
        </>
      )}
    </div>
  );
}
