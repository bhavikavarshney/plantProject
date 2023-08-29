import React from "react";

const TotalPlants = ({ totalPlants }) => {
  return (
    // <div className="shadow-md rounded-md flex bg-white max-w-md p-5  justify-between">
    //   <div>
    //     <b>
    //       Total Plants
    //     </b>
    //   </div>

    //   <div className="rounded-md border-gray-100 border-2 px-4">
    //     {totalPlants}
    //   </div>
    // </div>

    <div className="card w-96 bg-white shadow-xl">
  <div className="card-body">
    <h2 className="card-title flex justify-evenly "><div>Total Plants</div>  {totalPlants}</h2>
  
  </div>
</div>
  );
};

export default TotalPlants;
