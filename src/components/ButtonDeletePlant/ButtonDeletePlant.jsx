import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";

function ButtonDeletePlant({ plant }) {
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleOnClick = () => {
    console.log("Plant to delete:", plant);
    authService
      .deletePlant(plant)
      .then((response) => {
        console.log("Data Plant🌿is received");
        console.log({ response });

        navigate("/my-garden");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <button onClick={handleOnClick}>Delete Plant</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default ButtonDeletePlant;
