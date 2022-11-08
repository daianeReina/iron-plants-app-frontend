import "./CardPlantGarden.css";

import React from "react";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";
import ButtonDeletePlant from "../ButtonDeletePlant/ButtonDeletePlant";

function CardPlantGarden({ plant, setData, getAllPlants }) {
  const navigate = useNavigate();

  const slug = slugify(plant.latin).toLowerCase();

  return (
    <div key={plant.id}>
      <img
        src="https://media.istockphoto.com/photos/young-plant-growing-in-sunlight-picture-id658291850?k=20&m=658291850&s=612x612&w=0&h=RLzbYzoN8q8UoKDUd3eebu2hmrhCEYIE48C41x419Fs="
        alt="plant"
      />
      <h2>{plant.latin}</h2>
      <h3>Family: {plant.family}</h3>

      <button
        onClick={() => {
          navigate(`/plants/${slug}`);
        }}
      >
        More Info
      </button>
      <ButtonDeletePlant
        plant={plant}
        setData={setData}
        getAllPlants={getAllPlants}
      />
    </div>
  );
}

export default CardPlantGarden;
