import React from 'react'; // Import the React library

// Define a functional component using JSX
const Dashboard = () => {
  return (
    <>
    <div>
      <h>My Plants</h>
    </div>
    <div className="card w-96 bg-base-100 shadow-xl glass">
        <figure className="px-10 pt-10">
            <img alt="plant" src="/plant.jpg" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
        </div>
        </div>
    </div>
    <div className="card w-96 bg-base-100 shadow-xl glass">
        <figure className="px-10 pt-10">
            <img src="/plant.jpg" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
        </div>
        </div>
    </div>
    </>
  );
};


// Export the component to use it in other parts of your application
export default Dashboard;
