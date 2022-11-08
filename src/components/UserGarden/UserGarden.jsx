import "./UserGarden.css";

import React, { useCallback, useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import CardPlantGarden from "../CardPlantGarden/CardPlantGarden";
import Loading from "../Loading/Loading";

function UserGarden({ userPlant }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const { latin } = userPlant;

  const getAllPlants = useCallback(() => {
    apiClient
      .get("/plants")
      .then((result) => {
        setData(result.data);
        // console.log(result.data);
      })
      .catch((error) => {
        console.log("ERROR: ", error);
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    getAllPlants();
  }, [getAllPlants]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {data
        .filter((plant) => {
          return plant.latin.includes(latin);
        })
        .map((plant) => {
          return (
            <CardPlantGarden
              key={plant.id}
              plant={plant}
              setData={setData}
              getAllPlants={getAllPlants}
            />
          );
        })
        .slice(0, 1)}

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </>
  );
}

export default UserGarden;
