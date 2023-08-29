import React from 'react'
import Register from './Register'
import Landing from './Landing'
import Login from './Login'
import AdminDashBoard from './AdminDashBoard'

const App = () => {
  return (
    <div>
      {/* <Register /> */}
      {/* <Landing /> */}
      <AdminDashBoard schoolName={"CSIT"} totalPlants={21} />
      {/* <Login /> */}
    </div>
  )
}

export default App