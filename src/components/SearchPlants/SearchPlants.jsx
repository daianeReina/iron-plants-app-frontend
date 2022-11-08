import React, { useEffect, useState } from "react";
import "./SearchPlants.css";
import CardPlant from "../CardPlant/CardPlant";
import apiClient from "../../services/api-client";
import Loading from "../Loading/Loading";

function SearchPlants() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(undefined);

  useEffect(() => {
    apiClient
      .get("/plants")
      .then((result) => {
        setData(result.data);
        // console.log(result.data);
      })
      .catch((error) => {
        console.log("ERROR: ", error);
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  console.log(data);
  console.log({ search, isHere: !search });

  return (
    <>
      <div className="container">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search by latin name"
          onChange={handleSearch}
          value={search}
          aria-label="Search"
        />
        <div>
          {search &&
            data
              .filter((plant) => {
                return plant.latin.toLowerCase().includes(search.toLowerCase());
              })
              .map((plant) => {
                return <CardPlant key={plant.id} plant={plant} />;
              })}
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </>
  );
}

export default SearchPlants;

// import "./Plants.css";
// import { useState, useEffect } from "react";

// import authService from "../../services/auth.service";
// // import { useNavigate } from "react-router-dom";

// import React from "react";

// function Plants() {
//   const [errorMessage, setErrorMessage] = useState(undefined);

//   const [data, setData] = useState();

//   const resquestBody = data;

//   useEffect(() => {
//     authService
//       .plants(resquestBody)
//       .then((result) => {
//         setData(result.data);
//       })
//       .catch((error) => {
//         const errorDescription = error.response.data.message;
//         setErrorMessage(errorDescription);
//       });
//   });

//   return (
//     <>
//       {data.map((plant) => {
//         return (
//           <div key={plant.id}>
//             <h1>{plant.latin}</h1>
//           </div>
//         );
//       })}
//       {/* <div>
//         <form>
//           <div>
//             <input type="text" placeholder="Search a plant" />
//           </div>
//           <button type="submit">Search</button>
//         </form>
//       </div> */}
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
//     </>
//   );
// }

// export default Plants;
