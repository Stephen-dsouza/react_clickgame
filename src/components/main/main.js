import React from "react";
import "./main.css";

const CharacterCard = props => {
  return (
    <div className="card col-md-3">
      <div
        onClick={() => props.handleClick(props.id)}
        className="img-container"
      >
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content"></div>
    </div>
  );
};

export default CharacterCard;
