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
      <h1> {latin}</h1>

      <p>
        A species of
        <b>
          <em> {family}</em>
        </b>
        , also know as
        <b>
          <em> {stringCommonName}</em>
        </b>
      </p>
      <p>
        <b>Botanical name:</b> {latin}
      </p>

      <h2> Description:</h2>
      <p>
        <b>Origin: </b>
        {origin}
      </p>
      <p>
        <b>Family: </b>
        {family}
      </p>
      <p>
        <b>Category: </b>
        {category}
      </p>
      <p>
        <b>Climate: </b>
        {climate}
      </p>

      <h2> Care Guide for {latin}:</h2>

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
  );
}

export default DetailsPlant;
