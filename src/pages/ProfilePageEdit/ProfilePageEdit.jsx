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
        <>
          <h1> Edit you settings</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={userData.name}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={userData.email}
              />
            </label>
            <br />
            <Link to="/profile/edit-password"> Change your Password</Link>
            <br />
            <Link to="/profile/delete-account"> Delete your Account</Link>
            <br />
            <button type="submit">Change</button>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </>
      )}
    </div>
  );
}

export default ProfilePageEdit;
