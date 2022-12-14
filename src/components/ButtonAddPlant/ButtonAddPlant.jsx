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
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <button className="btn btn-success" onClick={handleOnClick}>
        Add Plant
      </button>
      {errorMessage && (
        <p className="alert alert-danger error-message" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export default ButtonAddPlant;
