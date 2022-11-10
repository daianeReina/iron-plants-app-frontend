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
    <>
      {isLoggedIn && (
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <img
                className="img-fluid imgProfile"
                src="/img-profile.png"
                alt="img-profile-houseplant"
              />
            </div>
            <div className="col">
              <h1 className="text-success">Delete your Profile</h1>
              <p className="alert alert-danger" role="alert">
                ⚠ By deleting your account, you will no longer be able to sign
                in, your activity will be removed from IronPlants!
              </p>
              <p>Please, provide your password to confirm your deletion. </p>
              <form onSubmit={handleSubmit}>
                <div className="form-group row d-flex align-items-center">
                  <label className="col-sm-2 col-form-label">Password:</label>
                  <div className="col-sm-10">
                    <input
                      className="form-control my-3 "
                      type="password"
                      name="password"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <br />
                <button className="btn btn-success mt-4" type="submit">
                  Delete My Account
                </button>
              </form>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfilePageDeleteAccount;
