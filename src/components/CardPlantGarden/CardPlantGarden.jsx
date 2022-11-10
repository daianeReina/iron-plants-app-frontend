import "./CardPlantGarden.css";

import React from "react";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";
import ButtonDeletePlant from "../ButtonDeletePlant/ButtonDeletePlant";

function CardPlantGarden({ plant, getAllPlants }) {
  console.log("ui", plant);
  const navigate = useNavigate();

  const slug = slugify(plant.latin).toLowerCase();

  return (
    // <div className="col d-flex " >
    <div className="card my-3" key={plant.id} style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src="https://media.istockphoto.com/photos/young-plant-growing-in-sunlight-picture-id658291850?k=20&m=658291850&s=612x612&w=0&h=RLzbYzoN8q8UoKDUd3eebu2hmrhCEYIE48C41x419Fs="
        alt="plant"
      />
      <div className="card-body">
        <h4 className="card-title text-success">{plant.latin}</h4>
        <p className="card-text text-secondary my-1">
          <em>Common Name</em>:
        </p>

        <p className="card-text text-secondary mt-0">
          <em>
            {typeof plant.common === "string"
              ? plant.common
              : plant.common.join(", ")}
          </em>
        </p>
        <div className="d-flex align-items-center justify-content-evenly">
          <button
            className="btn btn-success m-2 "
            onClick={() => {
              navigate(`/plants/${slug}`);
            }}
          >
            More Info
          </button>
          <ButtonDeletePlant plant={plant} getAllPlants={getAllPlants} />
        </div>
        {/* <h2>{plant.latin}</h2>
          <h3>Family: {plant.family}</h3>

          <button
            className="btn btn-success m-2 "
            onClick={() => {
              navigate(`/plants/${slug}`);
            }}
          >
            More Info
          </button>
          <ButtonDeletePlant plant={plant} getAllPlants={getAllPlants} /> */}
      </div>
    </div>
    // </div>
  );
}

export default CardPlantGarden;
