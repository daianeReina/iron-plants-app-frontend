import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardPlant.css";
import slugify from "slugify";
import ButtonAddPlant from "../ButtonAddPlant/ButtonAddPlant";

function CardPlant({ plant }) {
  const navigate = useNavigate();

  const slug = slugify(plant.latin).toLowerCase();

  return (
    // <div className="container g-3 ">
    // <div className="row g-3 mt-3">
    <div className="col d-flex ">
      <div className="card my-3" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="https://media.istockphoto.com/photos/young-plant-growing-in-sunlight-picture-id658291850?k=20&m=658291850&s=612x612&w=0&h=RLzbYzoN8q8UoKDUd3eebu2hmrhCEYIE48C41x419Fs="
          alt="plant"
        />
        <div className="card-body">
          <h4 className="card-title">{plant.latin}</h4>
          <p className="card-text">Family: {plant.family}</p>
          <div className="d-flex align-items-center justify-content-evenly">
            <button
              className="btn btn-success m-2 "
              onClick={() => {
                navigate(`/plants/${slug}`);
              }}
            >
              More Info
            </button>
            <ButtonAddPlant plant={plant} />
          </div>
        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
}

export default CardPlant;
