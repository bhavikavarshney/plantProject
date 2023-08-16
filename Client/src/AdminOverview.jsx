import React from 'react'

const AdminOverview =() => {
    return (
        <div className="flex flex-col items-center m-10">
            <div className="flex flex-col justify-content text-2xl">
                CSIT
            </div>
        {/* Total Plants Card */}
            <div className="card w-2/6 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="card-actions flex flex-col items-center justify-content ">
                        <h2 className="card-title">Total Plants: </h2>
                        <button className="btn no-animation">2441</button>
                    </div>
                </div>
            </div>
            <div className="justify-content text-2xl m-8">
                Branch
            </div>
            {/* First Card */}
            <div className="card w-2/6 bg-base-100 shadow-xl">
                <figure className="max-w-sm mx-auto">
                    <div class="flex-container">
                        <img src="./public/plant.jpeg" alt="Plant" className="ml-10 float-right w-1/6 rounded-xl" />
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">CSSE A</h2>
                    <p>Total Planters: 34/44</p>
                </div>
            </div>
            {/* Second Card */}
            <div className="card w-2/6 bg-base-100 shadow-xl m-5">
                <figure className="max-w-sm mx-auto">
                    <div>
                        <img src="./public/plant.jpeg" alt="Plant" className="ml-10 float-right w-1/6 rounded-xl" />
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="mr-40 float-left card-title">CSIT B</h2>
                    <p>Total Planters: 40/44</p>
                </div>
            </div>
        </div>
        
    )
}

export default AdminOverview