import "./MyGardenPage.css";

import React, { useEffect, useState } from "react";
import authService from "../../services/auth.service";
import Loading from "../../components/Loading/Loading";
import UserGarden from "../../components/UserGarden/UserGarden";

function MyGardenPage() {
  const [plants, setPlants] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(undefined);

  useEffect(() => {
    authService
      .getAllPlantsByUser()
      .then((response) => {
        // console.log(response.data);
        setPlants(response.data);
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
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
    <div>
      <h1> My garden</h1>
      <>
        {plants.map((plant) => {
          return (
            <div key={plant._id}>
              <UserGarden userPlant={plant} />
            </div>
          );
        })}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </>
    </div>
  );
}

export default MyGardenPage;
