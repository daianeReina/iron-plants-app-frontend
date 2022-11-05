import "./HomePage.css";
import SearchPlants from "../../components/SearchPlants/SearchPlants";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const { isLoggedIn, user } = useContext(AuthContext);
  return (
    <div>
      {isLoggedIn && (
        <>
          <h1>
            Hello, <span>{user && user.name}!</span>
          </h1>
          <SearchPlants />
        </>
      )}

      {!isLoggedIn && (
        <>
          <h1>Welcome to Iron Plants!</h1>
          <p> Become A Total Plant & Gardening Expert!</p>
          <p>Search for House Plants and create your own garden</p>
          <Link to="/signup">
            <button>Click Here to Sign Up</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default HomePage;
