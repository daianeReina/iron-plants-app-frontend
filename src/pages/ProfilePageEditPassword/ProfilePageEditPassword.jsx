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
        <div className="container">
          <div className="row align-items-center justify-content-evenly">
            <div className="col-sm-5">
              <img
                className="img-fluid imgPasswordEdit"
                src="/img-profile.png"
                alt="img-profile-houseplant"
              />
            </div>
            <div className="col-sm-5 ">
              <h1 className="text-success">Edit You Password</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group row d-flex align-items-center ">
                  <label
                    for="currentPassword"
                    className="col-sm-5 col-form-label"
                  >
                    Current Password:
                  </label>

                  <div className="col-sm-6">
                    <input
                      className="form-control my-3"
                      type="password"
                      name="password"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group row d-flex align-items-center ">
                  <label for="newPassword" className="col-sm-5 col-form-label">
                    New Password:
                  </label>
                  <div className="col-sm-6">
                    <input
                      className="form-control my-3"
                      type="password"
                      name="newPassword"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group row d-flex align-items-center ">
                  <label
                    for="ConfirmNewPassword"
                    className="col-sm-5 col-form-label"
                  >
                    Confirm New Password:
                  </label>
                  <div className="col-sm-6">
                    <input
                      className="form-control my-3"
                      type="password"
                      name="confirmNewPassword"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button className="btn btn-success mt-4" type="submit">
                  Save
                </button>
              </form>

              {errorMessage && (
                <p className="alert alert-danger error-message">
                  {errorMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePageEditPassword;
