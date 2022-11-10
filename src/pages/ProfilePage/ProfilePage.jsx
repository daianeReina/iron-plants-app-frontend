import "./ProfilePage.css";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Link } from "react-router-dom";

function ProfilePage() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user } = useContext(AuthContext);

  return (
    <>
      {isLoggedIn && (
        <div className="container  ">
          <div className="row align-items-center ">
            <div className="col">
              <img
                className="img-fluid imgProfile"
                src="/img-profile.png"
                alt="img-profile-houseplant"
              />
            </div>
            <div className="col">
              <h1 className="text-success">Your Profile</h1>
              <h2>
                Name: <span>{user && user.name}</span>
              </h2>
              <h2>
                Email: <span>{user && user.email}</span>
              </h2>
              <p className="text-secondary">
                If you want to change your name, email or password go to
                settings
              </p>
              <Link to="/profile/edit">
                <button className="btn btn-success"> Settings</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfilePage;
