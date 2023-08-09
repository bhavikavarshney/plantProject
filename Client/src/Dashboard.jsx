import React from 'react';

const Dashboard = () => {
  return (
    <>
    <div className="flex flex-col items-left justify-center text-xl mt-10 ml-20">
        <h>Hi "name of student"</h>
    </div>
    <div className="flex flex-col items-center justify-center text-2xl mt-10">
        <h>My Plants</h>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex justify-center items-center mt-20">
    {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="card w-72 h-96 shadow-xl shadow-neutral mx-auto">
            <figure className="px-5 pt-5">
                <img alt="plant" src="/plant.jpg" className="rounded-xl" />
            </figure>
            <div className="card-body items-left text-center">
                <h2 className="card-title mb-6">Plant Name</h2>
                <div className="card-actions">
                    <button className="btn btn-primary w-14 h-14 mx-auto">Buy Now</button>
                    <button className="btn btn-primary w-14 h-14 mx-auto">Buy Now</button>
                    <button className="btn btn-primary w-14 h-14 mx-auto">Buy Now</button>
                </div>
            </div>
        </div>
    ))}
    </div>
    </>
  );
};

export default Dashboard;
