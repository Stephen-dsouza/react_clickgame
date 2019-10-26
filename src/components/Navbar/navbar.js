import React from "react";
import "./navbar.css";
const Navbar = props => {
  return (
    <div className="navbar navbar-dark bg-dark box-shadow">
      <h1>click game</h1>
      <span className="message">ttt{props.message}</span>
      Your Score:{props.score}|Top Score:{props.topScore}
    </div>
  );
};

export default Navbar;
