import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, logOutUser, user } = useContext(AuthContext);

  return (
    <nav className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div>
        <Link to="/">
          <img className="imgLogo" src="/IronPlantsLogo.png" alt="plant" />
        </Link>
      </div>

      {isLoggedIn && (
        <>
          <Link
            href="#"
            className="nav-link px-2 link-secondary"
            to="/my-garden"
          >
            My Garden
          </Link>

          <Link href="#" className="nav-link px-2 link-secondary" to="/">
            Search a Plant
          </Link>
          <Link href="#" className="nav-link px-2 link-secondary" to="/profile">
            Profile
          </Link>

          <div className="logoutWelcomeUser">
            <h4 href="#" className="nav-link px-2 link-success">
              Hello, <span>{user && user.name}</span>!
            </h4>
            <Link
              type="button"
              className="btn btn-outline-success me-2"
              onClick={logOutUser}
            >
              Logout
            </Link>
          </div>
        </>
      )}

      {!isLoggedIn && (
        <>
          <div>
            <Link
              type="button"
              className="btn btn-outline-success me-2"
              to="/login"
            >
              Login
            </Link>
            <Link type="button" className="btn btn-success" to="/signup">
              Sign Up
            </Link>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
