import "./LoginPage.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    // Send a request to the server using axios
    /* 
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`)
      .then((response) => {})
    */

    // Or using a service
    authService
      .login(requestBody)
      .then((response) => {
        // If the POST request is successful store the authentication token,
        // after the token is stored authenticate the user
        // and at last navigate to the home page
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
      <section className="Form my-4 mx-5">
        <div className="container">
          <div className="row ">
            <div className="col">
              <img
                src="/plant-horizontal-2.png"
                className="imgLogin img-fluid"
                alt="loginImage"
              />
            </div>
            <div className="col px-5 pt-5">
              <h1 className="text-start font-weith-bold py-3">Log In</h1>
              <h4 className="text-start"> Sign into your account</h4>
              <form onSubmit={handleLoginSubmit}>
                <div className="form-row">
                  <div className="col">
                    <input
                      type="email"
                      className="form-control my-3"
                      placeholder="Your email"
                      name="email"
                      value={email}
                      onChange={handleEmail}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="password"
                      className="form-control my-3 "
                      placeholder="Your password"
                      name="password"
                      value={password}
                      onChange={handlePassword}
                    />
                  </div>
                  <div className="col">
                    <button
                      className="w-100 btn btn-outline-success me-2"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                  {errorMessage && (
                    <p className="error-message">{errorMessage}</p>
                  )}
                  <p className="text-start my-3">
                    Don't have an account?
                    <Link to={"/signup"}>Register Here</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>

    // <div className="LoginPage container">
    //   <h1 className="h3 mb-3 fw-normal">Please Sign In</h1>

    //   <form onSubmit={handleLoginSubmit}>
    //     <div className="form-floating">
    //       <input
    //         type="email"
    //         className="form-control"
    //         placeholder="name@example.com"
    //         name="email"
    //         value={email}
    //         onChange={handleEmail}
    //       />
    //       <label for="floatingInput">Email Address</label>
    //     </div>
    //     <div className="form-floating">
    //       <input
    //         type="password"
    //         className="form-control"
    //         placeholder="password"
    //         name="password"
    //         value={password}
    //         onChange={handlePassword}
    //       />
    //       <label>Password:</label>
    //     </div>

    //     <button className="w-100 btn btn-lg btn-success" type="submit">
    //       Login
    //     </button>
    //   </form>
    //   {errorMessage && <p className="error-message">{errorMessage}</p>}

    //   <p>Don't have an account yet?</p>
    //   <Link to={"/signup"}> Sign Up</Link>
    // </div>
  );
}

export default LoginPage;
