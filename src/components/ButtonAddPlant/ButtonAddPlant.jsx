import "./ButtonAddPlant.css";

import React, { useContext, useState } from "react";

import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import apiClient from "../../services/api-client";

function ButtonAddPlant({ plant }) {
  //   console.log({ plant });
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const handleOnClick = (e) => {
    e.preventDefault();
    console.log(plant);
    apiClient
      .post("/plant-list/add-plant", plant)
      .then(console.log)
      .catch(console.error);

    // authService
    //   .addPlant({ user, plant })
    //   .then((response) => {
    //     console.log("Data Plant🌿is received");
    //     storeToken(response.data.authToken);
    //     authenticateUser();
    //     navigate("/my-garden");
    //   })
    //   .catch((error) => {
    //     const errorDescription = error.response.data.message;
    //     setErrorMessage(errorDescription);
    //   });
  };

  //AMANHÃ TRABALHAR COM ISSO
  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     const requestBody = userData;
  //     // console.log(userData);

  //     //console.log("RequestBody:", requestBody);

  //     authService
  //       .profileEdit(requestBody)
  //       .then((response) => {
  //         console.log("Data is received");
  //         storeToken(response.data.authToken);
  //         authenticateUser();
  //         navigate("/profile");
  //       })
  //       .catch((error) => {
  //         // If the request resolves with an error, set the error message in the state
  //         const errorDescription = error.response.data.message;
  //         setErrorMessage(errorDescription);
  //       });
  //   }

  //   const { storeToken, authenticateUser } = useContext(AuthContext);
  return (
    <div>
      <button onClick={handleOnClick}>Add to My Garden</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default ButtonAddPlant;
