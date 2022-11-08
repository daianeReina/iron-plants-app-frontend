import "./UserGarden.css";
import React from "react";
import CardPlantGarden from "../CardPlantGarden/CardPlantGarden";

function UserGarden({ userPlant, getAllPlants, setData }) {
  // console.log({ userPlant });
  return (
    <>
      <CardPlantGarden
        key={userPlant.id}
        plant={userPlant}
        setData={setData}
        getAllPlants={getAllPlants}
      />
    </>
  );
}

export default UserGarden;
