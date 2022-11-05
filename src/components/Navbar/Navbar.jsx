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
        <img
          src="https://media.istockphoto.com/photos/young-plant-growing-in-sunlight-picture-id658291850?k=20&m=658291850&s=612x612&w=0&h=RLzbYzoN8q8UoKDUd3eebu2hmrhCEYIE48C41x419Fs="
          alt="plant"
        />
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/my-garden"> My Garden</Link>
          <Link to="/profile">
            Profile
            {/* <img
              src="https://picsum.photos/id/402/200/300"
              style={{ width: 50, height: 50, borderRadius: 25 }}
              alt="profile"
            /> */}
          </Link>

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
