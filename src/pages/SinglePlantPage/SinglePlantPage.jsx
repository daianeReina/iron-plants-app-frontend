import "./SinglePlantPage.css";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../services/api-client";
import Loading from "../../components/Loading/Loading";
import DetailsPlant from "../../components/DetailsPlant/DetailsPlant";
import ButtonAddPlant from "../../components/ButtonAddPlant/ButtonAddPlant";

function SinglePlantPage() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const { latin } = useParams();

  //   console.log(latin);

  const latinNameWithSpace = latin.replaceAll("-", " ");

  //   console.log(latinNameWithSpace);

  useEffect(() => {
    setIsLoading(true);

    apiClient
      .get(`/plants`)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log("ERROR: ", error);
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [latin]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      {data
        .filter((plant) => {
          return plant.latin
            .toLowerCase()
            .includes(latinNameWithSpace.toLowerCase());
        })

        .map((plant) => {
          return (
            <div key={plant.id}>
              <>
                <DetailsPlant key={plant.id} plant={plant} />
                <ButtonAddPlant />
              </>
            </div>
          );
        })
        .slice(0, 1)}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default SinglePlantPage;
