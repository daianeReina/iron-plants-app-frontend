import "./DetailsPlant.css";

import React from "react";

function DetailsPlant({ plant }) {
  const { latin, family } = plant;
  return (
    <div>
      <h1> {latin}</h1>
      <h1> {family}</h1>
    </div>
  );
}

export default DetailsPlant;
