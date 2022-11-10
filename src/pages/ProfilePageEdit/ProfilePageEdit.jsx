import "./ProfilePageEdit.css";
import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import { Link } from "react-router-dom";

function ProfilePageEdit() {
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

    //console.log("RequestBody:", requestBody);

    authService
      .profileEdit(requestBody)
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
          <div className="row align-items-center ">
            <div className="col">
              <img
                className="img-fluid imgProfile"
                src="/img-profile.png"
                alt="img-profile-houseplant"
              />
            </div>
            <div className="col">
              <h1 className="text-success"> Edit you settings</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group row d-flex align-items-center">
                  <label for="inputName" className="col-sm-2 col-form-label">
                    Name:
                  </label>
                  <div className="col-sm-10">
                    <input
                      className="form-control my-3 "
                      id="exampleFormControlInput1"
                      type="text"
                      name="name"
                      onChange={handleChange}
                      value={userData.name}
                    />
                  </div>
                </div>
                <div className="form-group row d-flex align-items-center">
                  <label for="email" className="col-sm-2 col-form-label">
                    Email:
                  </label>
                  <div className="col-sm-10">
                    <input
                      className="form-control my-3"
                      id="exampleFormControlInput2"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={userData.email}
                    />
                  </div>
                </div>

                <Link className="text-success" to="/profile/edit-password">
                  Change your Password
                </Link>
                <br />
                <Link className="text-success" to="/profile/delete-account">
                  Delete your Account
                </Link>
                <br />
                <button className="btn btn-success mt-4" type="submit">
                  Save your Changes!
                </button>
              </form>
              {errorMessage && (
                <p className="alert alert-danger error-message" role="alert">
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

export default ProfilePageEdit;
