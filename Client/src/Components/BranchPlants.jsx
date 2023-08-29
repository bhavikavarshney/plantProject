import React from "react";

const BranchPlants = ({branch,CurrentPlanters,TotalPlanters}) => {
  return (
    <div>
      <div className="card w-96 bg-white shadow-xl">
        <div className="card-body flex flex-col">
            {branch.name} {branch.section}
          <h2 className="card-title flex  ">
            <div>Planters</div> {CurrentPlanters} / {TotalPlanters}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BranchPlants;
