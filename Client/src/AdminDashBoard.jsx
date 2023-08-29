import React from 'react'
import TotalPlants from './Components/TotalPlants'
import BranchPlants from './Components/BranchPlants'

const AdminDashBoard = ({schoolName,totalPlants}) => {
  return (
    <div >
        {schoolName}

        <TotalPlants totalPlants={totalPlants}/>


        BRANCH

        <BranchPlants branch={{"name":"CSSE","section":"A"}} CurrentPlanters={21} TotalPlanters={42} />        


    </div>
  )
}

export default AdminDashBoard