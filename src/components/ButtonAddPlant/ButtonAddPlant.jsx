import "./ButtonAddPlant.css";

import React, { useState } from "react";

///import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import apiClient from "../../services/api-client";

function ButtonAddPlant({ plant }) {
  //   console.log({ plant });
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleOnClick = () => {
    // console.log(plant);

    console.log("Working");
    apiClient
      .post("/plant-list/add-plant", plant)
      .then((response) => {
        console.log("Data Plant🌿is received");
        console.log({ response });

        navigate("/my-garden");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        console.log("oh oh");
        console.log(error.response.data);
        //  setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <button onClick={handleOnClick}>Add to My Garden</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default ButtonAddPlant;
