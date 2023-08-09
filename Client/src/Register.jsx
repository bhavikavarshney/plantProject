import React from "react";

const Register = () => {
  return (
  
      <form className="flex flex-col justify-center space-y-4 xs:w-full  p-20">
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Email ID"
            className="input input-ghost w-full max-w-xs"
          />
          <input
            type="password"  
            placeholder="Password"
            className="input input-ghost w-full max-w-xs"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-ghost w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="SRN"
            className="input input-ghost w-full max-w-xs"
          />

          <div className="flex flex-row">
          <select className="select select-ghost w-60% max-w-xs basis-3/5">
                <option disabled defaultValue>
                  Class
                </option>
                <option>Svelte</option>
                <option>Vue</option>
                <option>React</option>
              </select>

           
              <select className="select select-ghost w-40% max-w-xs basis-2/5 ">
                <option disabled defaultValue>
                  Section
                </option>
                <option>Svelte</option>
                <option>Vue</option>
                <option>React</option>
              </select>


          </div>

         

          </div>

          <input type="submit" value="Sign Up" className="btn" />
      </form>
  );
};

export default Register;
