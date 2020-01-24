import React from "react";
import "./style.css";

function DoggoCard(props) {
  return (
    <div className="card bg-dark text-white">
        <img className="card-img" src={props.image} alt={props.id} />
    </div>
  );
}

export default DoggoCard;