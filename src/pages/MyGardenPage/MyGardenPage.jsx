import "./MyGardenPage.css";

import React, { useEffect, useState, useCallback } from "react";
import authService from "../../services/auth.service";
import Loading from "../../components/Loading/Loading";
import CardPlantGarden from "../../components/CardPlantGarden/CardPlantGarden";

function MyGardenPage() {
  const [plants, setPlants] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const getAllPlants = useCallback(() => {
    return authService
      .getAllPlantsByUser()
      .then((response) => {
        console.log(response.data);
        setPlants(response.data);
        return response.data;
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  }, []);

  useEffect(() => {
    getAllPlants().then(() => {
      setIsLoading(false);
    });
  }, [getAllPlants]);

  if (isLoading) {
    return <Loading />;
  }

  console.log({ plants });

  return (
    <div className="container d-flex flex-column bd-highlight mb-3">
      <div className="col ">
        <h1 className="text-success mb-3 "> My garden</h1>
      </div>
      <div className="row">
        {plants.map((plant) => {
          return (
            <div className="col d-flex" key={plant._id}>
              <CardPlantGarden plant={plant} getAllPlants={getAllPlants} />
            </div>
          );
        })}

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default MyGardenPage;
