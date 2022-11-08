import "./SignupPage.css";
import { useState, useContext } from "react"; // acrescentei o UseConntext
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context"; // ---> Add the AuthContext
import authService from "../../services/auth.service";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext); //<----Add the AuthContext

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name, confirmPassword };

    // Send a request to the server using axios
    /* 
    const authToken = localStorage.getItem("authToken");
    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/auth/signup`, 
      requestBody, 
      { headers: { Authorization: `Bearer ${authToken}` },
    })
    .then((response) => {})
    */

    // Or using a service
    authService
      .signup(requestBody)
      .then((response) => {
        // If the POST request is successful store the authentication token,
        // after the token is stored authenticate the user
        // and at last navigate to the home page
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");

        // If the POST request is successful redirect to the login page
        // navigate("/login");
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
          <div className="row g-0">
            <div className="col px-5 pt-5">
              <h1 className="text-start font-weith-bold py-3">Sign Up</h1>
              <h4 className="text-start">
                And Become A Total Plant & Gardening Expert!
              </h4>
              <form onSubmit={handleSignupSubmit}>
                <div className="form-row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control my-3"
                      placeholder="Your name"
                      name="name"
                      value={name}
                      onChange={handleName}
                    />
                  </div>
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
                    <input
                      type="password"
                      className="form-control my-3 "
                      placeholder="Confirm Your password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleConfirmPassword}
                    />
                  </div>
                  {errorMessage && (
                    <>
                      <p
                        className="alert alert-danger error-message"
                        role="alert"
                      >
                        {errorMessage}
                      </p>
                    </>
                  )}
                  <div className="col">
                    <button
                      className="w-100 btn btn-outline-success me-2"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>
                  <p className="text-start my-3">
                    Already have account?<span> </span>
                    <Link
                      className="text-decoration-none text-success"
                      to={"/login"}
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
            <div className="col align-self-center">
              <img
                src="/plant-horizontal-1.png"
                className="imgSignUp img-fluid"
                alt="loginImage"
              />
            </div>
          </div>
        </div>
      </section>
    </>
    // <div className="SignupPage">
    //   <h1>Sign Up</h1>

    //   <form onSubmit={handleSignupSubmit}>
    //     <label>Name:</label>
    //     <input type="text" name="name" value={name} onChange={handleName} />
    //     <br />

    //     <label>Email:</label>
    //     <input type="email" name="email" value={email} onChange={handleEmail} />
    //     <br />

    //     <label>Password:</label>
    //     <input
    //       type="password"
    //       name="password"
    //       value={password}
    //       onChange={handlePassword}
    //     />
    //     <br />

    //     <label> Confirm Password:</label>
    //     <input
    //       type="password"
    //       name="confirmPassword"
    //       value={confirmPassword}
    //       onChange={handleConfirmPassword}
    //     />
    //     <br />

    //     <button type="submit">Sign Up</button>
    //   </form>

    //   {errorMessage && <p className="error-message">{errorMessage}</p>}

    //   <p>Already have account?</p>
    //   <Link to={"/login"}> Login</Link>
    // </div>
  );
}

export default SignupPage;
