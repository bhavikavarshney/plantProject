import React from "react";

const Login = () => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">SRN</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />

      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input
        type="password"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />

      <div>
        <span>
          Forgot password ? <b> Reset it </b>
        </span>
      </div>

      <button className="btn btn-xs m-2 sm:btn-sm md:btn-md ">Sign In</button>
    </div>
  );
};

export default Login;
