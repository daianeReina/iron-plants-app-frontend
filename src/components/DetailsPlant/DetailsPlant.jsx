import "./DetailsPlant.css";

import React from "react";

function DetailsPlant({ plant }) {
  const {
    latin,
    family,
    common,
    category,
    origin,
    climate,
    tempmax,
    tempmin,
    ideallight,
    toleratedlight,
    watering,
    insects,
    diseases,
    use,
  } = plant;

  const stringCommonName = common.join(", ");
  return (
    <div>
      <h1 className="text-success my-4"> {latin}</h1>

      <div className="row  justify-content-center">
        <div className="col">
          <img
            className="img-fluid img-details-1"
            src="/plant-horizontal-1.png"
            alt="img-details-plant"
          ></img>
        </div>

        <div className="col">
          <div className="pb-4">
            <h4>
              A species of
              <b className="text-success">
                <em> {family}</em>
              </b>
              ,
            </h4>
            <h4>
              also know as
              <b className="text-success">
                <em> {stringCommonName}</em>
              </b>
              .
            </h4>
          </div>
          <div>
            <p>
              <b>Origin: </b>
              {origin}
            </p>
            <p>
              <b>Family: </b>
              {family}
            </p>
            <p>
              <b>Botanical name:</b> {latin}
            </p>
            <p>
              <b>Category: </b>
              {category}
            </p>
            <p>
              <b>Climate: </b>
              {climate}
            </p>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <h3 className="text-success text-start">
          Care Guide for <em>{latin}</em>:
        </h3>
        <div className="row mt-5">
          <div className="col text-start">
            <p>
              <b>Ideal Light: </b>
              {ideallight}
            </p>

            <p>
              <b>Tolerated Light: </b>
              {toleratedlight}
            </p>
            <p>
              <b>Temperature Max.: </b>
              {tempmax.celsius} °C or {tempmax.fahrenheit} °F
            </p>
            <p>
              <b>Temperature Min.: </b>
              {tempmin.celsius} °C or {tempmin.fahrenheit} °F
            </p>
          </div>
          <div className="col text-start">
            <p>
              <b>Watering: </b>
              {watering}
            </p>
            <p>
              <b>Insects: </b>
              {typeof insects === "string" ? insects : insects.join(", ")}
            </p>
            <p>
              <b>Diseases: </b>
              {typeof diseases === "string" ? diseases : diseases.join(", ")}
            </p>
            <p>
              <b>Use: </b>
              {use.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPlant;
