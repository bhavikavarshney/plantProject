import React from 'react'

const StudentPlants = ({SRN,name,plantpic}) => {
  return (
    <div>
         <div className="card w-96 bg-white shadow-xl">
        <div className="card-body flex justify-evenly">
            
            <div className='flex flex-col'>
            {SRN}
            {name}
            </div>

            <img src={plantpic} alt="" />
  </div>
      </div>
    </div>
  )
}

export default StudentPlants