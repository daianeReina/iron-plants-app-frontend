import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";

function ButtonDeletePlant({ plant, getAllPlants }) {
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleOnClick = () => {
    console.log("Plant to delete:", plant);
    authService
      .deletePlant(plant)
      .then((response) => {
        console.log("Data Plant🌿is received");
        console.log({ response });
        getAllPlants().then((r) => console.log(r));
        // setData(response).data);
        //  navigate("/my-garden");
      })
      .catch((error) => {
        const errorDescription = error;
        console.log(errorDescription);
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <button onClick={handleOnClick}>Delete Plant</button>
      {errorMessage && (
        <p className="error-message">{JSON.stringify(errorMessage)}</p>
      )}
    </div>
  );
}

export default ButtonDeletePlant;
