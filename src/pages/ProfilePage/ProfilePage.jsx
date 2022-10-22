import "./ProfilePage.css";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Link } from "react-router-dom";

function ProfilePage() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user } = useContext(AuthContext);

  return (
    <div>
      <h1>Profile</h1>
      {isLoggedIn && (
        <>
          <h2>
            Name: <span>{user && user.name}</span>
          </h2>
          <h2>
            Email: <span>{user && user.email}</span>
          </h2>
          <p>
            If you want to change your name, email or password go to settings
          </p>
          <Link to="/profile/edit">
            <button> Settings</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default ProfilePage;
