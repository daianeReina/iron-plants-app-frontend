import "./UserGarden.css";

import React, { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import CardPlantGarden from "../CardPlantGarden/CardPlantGarden";
import Loading from "../Loading/Loading";

function UserGarden({ userPlant }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const { latin } = userPlant;

  useEffect(() => {
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
          return <CardPlantGarden key={plant.id} plant={plant} />;
        })
        .slice(0, 1)}

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </>
  );
}

export default UserGarden;
