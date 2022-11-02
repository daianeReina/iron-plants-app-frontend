import React, { useEffect, useState } from "react";
import "./SearchPlants.css";
import CardPlant from "../CardPlant/CardPlant";
import apiClient from "../../services/api-client";

function SearchPlants() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    //axios
    apiClient
      .get("/plants")

      .then((result) => {
        setData(result.data);
        // console.log(result.data);
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div>
        <input
          className="search"
          type="text"
          placeholder="Search by common name or latin name"
          onChange={handleSearch}
          value={search}
        />
        {search.length !== 0 && (
          <div>
            {data
              .filter((plant) => {
                return plant.latin.toLowerCase().includes(search.toLowerCase());
              })
              .map((plant) => {
                return <CardPlant key={plant.id} plant={plant} />;
              })}
          </div>
        )}
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
