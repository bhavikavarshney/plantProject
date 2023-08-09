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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex justify-center items-center h-screen">
        <div className="card w-72 h-96 shadow-xl  mx-auto">
            <figure className="px-5 pt-5">
                <img alt="plant" src="/plant.jpg" className="rounded-xl" />
            </figure>
            <div className="card-body items-left text-center">
                <h2 className="card-title mb-6">Plant Name</h2>
                {/* <p>Description if required</p> */}
                <div className="card-actions">
                    <button className="btn btn-primary w-14 h-14 mx-auto">Buy Now</button>
                    <button className="btn btn-primary w-14 h-14 mx-auto">Buy Now</button>
                    <button className="btn btn-primary w-14 h-14 mx-auto">Buy Now</button>
                </div>
            </div>
        </div>

        
        <div className="card w-72 h-96 shadow-xl  mx-auto">
            <figure className="px-5 pt-5">
                <img alt="plant" src="/plant.jpg" className="rounded-xl" />
            </figure>
            <div className="card-body items-left text-center">
                <h2 className="card-title mb-6">Plant Name</h2>
                {/* <p>Description if required</p> */}
                <div className="card-actions">
                    <button className="btn btn-primary w-14 h-14 mx-auto">Buy Now</button>
                    <button className="btn btn-primary w-14 h-14 mx-auto">Buy Now</button>
                    <button className="btn btn-primary w-14 h-14 mx-auto">Buy Now</button>
                </div>
            </div>
        </div>

        <div className="card w-72 h-96 shadow-xl  mx-auto">
            <figure className="px-5 pt-5">
                <img alt="plant" src="/plant.jpg" className="rounded-xl" />
            </figure>
            <div className="card-body items-left text-center">
                <h2 className="card-title mb-6">Plant Name</h2>
                {/* <p>Description if required</p> */}
                <div className="card-actions">
                    <button className="btn btn-primary w-14 h-14 mx-auto">Buy Now</button>
                    <button className="btn btn-primary w-14 h-14 mx-auto">Buy Now</button>
                    <button className="btn btn-primary w-14 h-14 mx-auto">Buy Now</button>
                </div>
            </div>
        </div>

        <div className="card w-72 h-96 shadow-xl  mx-auto">
            <figure className="px-5 pt-5">
                <img alt="plant" src="/plant.jpg" className="rounded-xl" />
            </figure>
            <div className="card-body items-left text-center">
                <h2 className="card-title mb-6">Plant Name</h2>
                {/* <p>Description if required</p> */}
                <div className="card-actions">
                    <button className="btn btn-primary w-14 h-14 mx-auto">Buy Now</button>
                    <button className="btn btn-primary w-14 h-14 mx-auto">Buy Now</button>
                    <button className="btn btn-primary w-14 h-14 mx-auto">Buy Now</button>
                </div>
            </div>
        </div>

    </div>  
    </>
  );
};


// Export the component to use it in other parts of your application
export default Dashboard;
