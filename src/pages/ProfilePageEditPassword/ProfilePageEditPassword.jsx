import "./ProfilePageEditPassword.css";
import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";

function ProfilePageEditPassword() {
  const [errorMessage, setErrorMessage] = useState(undefined);

  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user } = useContext(AuthContext);

  const [userData, setUserData] = useState(user);

  //   console.log(userData)
  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  function handleChange(e) {
    const { value, name } = e.target;

    setUserData({ ...userData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const requestBody = userData;
    // console.log(userData);

    console.log("RequestBody:", requestBody);

    authService
      .profileEditPassword(requestBody)
      .then((response) => {
        console.log("Data is received");
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/profile");
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
          <h1>Edit You Password</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Current Password:
              <input type="password" name="password" onChange={handleChange} />
            </label>
            <br />
            <label>
              New Password:
              <input
                type="password"
                name="newPassword"
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Confirm New Password:
              <input
                type="password"
                name="confirmNewPassword"
                onChange={handleChange}
              />
            </label>
            <br />

            <button type="submit">Change</button>
          </form>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </>
      )}
    </div>
  );
}

export default ProfilePageEditPassword;
