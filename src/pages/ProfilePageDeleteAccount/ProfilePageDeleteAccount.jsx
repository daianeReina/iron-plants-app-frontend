import "./ProfilePageDeleteAccount.css";
import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";

function ProfilePageDeleteAccount() {
  const [errorMessage, setErrorMessage] = useState(undefined);

  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  const [userData, setUserData] = useState(user);

  const navigate = useNavigate();

  const { storeToken } = useContext(AuthContext);

  function handleChange(e) {
    const { value, name } = e.target;

    setUserData({ ...userData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const requestBody = userData;
    // console.log(userData);

    //console.log("RequestBody:", requestBody);

    authService
      .profileDelete(requestBody)
      .then((response) => {
        console.log("Data is received");
        storeToken(response.data.authToken);
        logOutUser();
        navigate("/");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  }
  return (
    <div>
      {isLoggedIn && (
        <>
          <h1>Delete your Profile</h1>
          <p>
            ⚠ By deleting your account, you will no longer be able to sign in,
            your activity will be removed from IronPlants!
          </p>
          <p>Please, provide your password to confirm your deletion. </p>
          <form onSubmit={handleSubmit}>
            <label>
              Password:
              <input type="password" name="password" onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Delete my account</button>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </>
      )}
    </div>
  );
}

export default ProfilePageDeleteAccount;
