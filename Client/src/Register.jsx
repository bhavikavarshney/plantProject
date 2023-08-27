import React from 'react'

const Register = () => {
  return (
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input type="Email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />


  <label className="label">
    <span className="label-text">SRN</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

  



  <label className="label">
    <span className="label-text">Password</span>
  </label>
  <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />



  <label className="label">
    <span className="label-text">Confirm Password</span>
  </label>
  <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

    

  <button className="btn btn-xs m-2 sm:btn-sm md:btn-md ">Sign Up</button>



</div>
  )
}

export default Register