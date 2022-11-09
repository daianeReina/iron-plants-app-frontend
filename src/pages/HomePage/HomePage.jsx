import "./HomePage.css";
import SearchPlants from "../../components/SearchPlants/SearchPlants";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

function HomePage() {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      {isLoggedIn && (
        <>
          <div className="container d-flex flex-column bd-highlight mb-3">
            <div className="row">
              <div className="col ">
                <img
                  src="/img-search-2.png"
                  className="imgHome1 img-fluid "
                  alt="imageplant"
                />
                <h1 className="mb-3">Search for a plant by Latin Name</h1>
              </div>
            </div>
            <SearchPlants />
          </div>
        </>
      )}

      {!isLoggedIn && (
        <>
          <div className="container ">
            <div className="row align-items-start">
              <h1>Welcome to Iron Plants!</h1>
              <h4 className="text-muted">
                Become A Total Plant & Gardening Expert!
              </h4>
              <h4 className="text-muted">
                Search for House Plants and create your own garden
              </h4>
              <Link to="/signup">
                <button type="button" className="btn btn-success">
                  Click Here to Sign Up
                </button>
              </Link>
            </div>
            <div className="imagesAllPlants img-fluid ">
              <div className="divImg">
                <img
                  src="/plants-vertical-1.png"
                  className="imgPlant1 img-fluid rounded"
                  alt="plant-house1"
                />
                <img
                  src="/plant-horizontal-1.png"
                  className="imgPlant2 img-fluid rounded"
                  alt="plant-house1"
                />
              </div>
              <div className="divImg">
                <img
                  src="/plant-horizontal-2.png"
                  className="imgPlant2 img-fluid rounded"
                  alt="plant-house2"
                />
                <img
                  src="/plants-vertical-2.png"
                  className="imgPlant1 img-fluid rounded"
                  alt="plant-house2"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
