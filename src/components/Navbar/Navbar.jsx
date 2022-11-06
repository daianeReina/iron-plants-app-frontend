import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <img src="/IronPlantsLogo.png" alt="plant" />
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/my-garden"> My Garden</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/">Search a Plant</Link>

          <Link onClick={logOutUser}>Logout</Link>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
