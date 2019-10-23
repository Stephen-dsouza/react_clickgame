import React from "react";
import "./navbar.css";
const Navbar = props => {
  return (
    <div class="navbar navbar-dark bg-dark box-shadow">
      <h1>click game</h1>
      <span class="message">ttt{props.message}</span>
      Your Score:{props.score}|Top Score:{props.topscore}
    </div>
  );
};

export default Navbar;
