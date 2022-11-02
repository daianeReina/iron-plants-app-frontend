import React from "react";
import { Link } from "react-router-dom";
import "./CardPlant.css";

function CardPlant({ plant }) {
  return (
    <div>
      <img
        src="https://media.istockphoto.com/photos/young-plant-growing-in-sunlight-picture-id658291850?k=20&m=658291850&s=612x612&w=0&h=RLzbYzoN8q8UoKDUd3eebu2hmrhCEYIE48C41x419Fs="
        alt="plant"
      />
      <h2>{plant.latin} </h2>
      <h3>Family: {plant.family}</h3>
      <Link to={`/plants/${plant.latin}`}>
        <button>More Info</button>
      </Link>

      <button>+ Add to my garden</button>
    </div>
  );
}

export default CardPlant;
