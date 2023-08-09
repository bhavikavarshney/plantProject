import React from "react";

const Register = () => {
  return (
    <div className="flex flex-col">
      <form className="space-y-4">
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

              <select className="select select-ghost w-full max-w-xs">
                <option disabled defaultValue>
                  Class
                </option>
                <option>Svelte</option>
                <option>Vue</option>
                <option>React</option>
              </select>

              <select className="select select-ghost w-full max-w-xs">
                <option disabled defaultValue>
                  Section
                </option>
                <option>Svelte</option>
                <option>Vue</option>
                <option>React</option>
              </select>
          </div>

          <input type="submit" value="Sign Up" className="btn" />
      </form>
    </div>
  );
};

export default Register;
