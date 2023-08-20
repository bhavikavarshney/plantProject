import React from 'react';

const Dashboard = () => {
  return (
    <>
    <div className="flex flex-col items-left justify-center text-xl mt-5 ml-7 lg:mt-10 lg:ml-20">
        <h>Hi "name of student"</h>
    </div>
    <div className="flex flex-col items-center justify-center text-2xl mt-10">
        <h>My Plants</h>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6 flex justify-center items-center mt-20 mx-auto">
    {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="card lg:w-72 lg:h-96 shadow-xl hover:shadow-neutral mb-10 ml-3 mr-3">
            <figure className="px-5 pt-5">
                <img alt="plant" src="/plant.jpg" className="rounded-xl"/>
            </figure>
            <div className="card-body items-left text-center">
                <h2 className="card-title mb-2 lg:mb-6 text-xs md:text-xl lg:text-2xl">Plant Name</h2>
                <div className="card-actions">
                    <button className="btn btn-xs w-6 h-6 md:w-9 md:h-9 xl:w-11 xl:h-11 btn-primary mx-auto hover:bg-opacity-70">
                        <img src="/icons/location.png" alt="Icon" className="w-5.5 h-5.5 mx-auto"/>
                    </button>
                    <button className="btn btn-xs w-6 h-6  md:w-9 md:h-9 lg:w-11 lg:h-11 btn-primary mx-auto hover:bg-opacity-70">
                        <img src="/icons/heart.png" alt="Icon" className="w-5.5 h-5.5 mx-auto"/>
                    </button>
                    <button className="btn btn-xs w-6 h-6  md:w-9 md:h-9 lg:w-11 lg:h-11 btn-primary mx-auto hover:bg-opacity-70">
                        <img src="/icons/qr.png" alt="Icon" className="w-5.5 h-5.5 mx-auto"/>
                    </button>
                </div>
            </div>
        </div>
    ))}
    </div>
    </>
  );
};

export default Dashboard;
