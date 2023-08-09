import React, { useState } from 'react'; // Import the React library

// Define a functional component using JSX
const Dashboard = () => {
  return (
    <>
    <div>
      <h>Hi "name of student"</h>
    </div>
    <div>
      <h>My Plants</h>
    </div>
    <div className="flex justify-center items-center h-screen">
    <div className="card w-80 h-96 shadow-xl">
        <figure className="px-10 pt-10">
            <img alt="plant" src="/plant.jpg" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Plant Name</h2>
            {/* <p>Description if required</p> */}
            <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                <button className="btn btn-primary">Buy Now</button>
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
    </div>  
    </>
  );
};


// Export the component to use it in other parts of your application
export default Dashboard;
