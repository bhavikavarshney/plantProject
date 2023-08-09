import React from 'react'

const Login =() => {
    return (
        <div>
            <h1>Student Login</h1>
            <input 
                type="text" 
                placeholder="Email" 
                className="input input-ghost w-full max-w-xs" 
                />
            <input 
                type="text" 
                placeholder="Password" 
                className="input input-ghost w-full max-w-xs" 
                />
            <button 
            className="btn btn-active btn-primary"
            >Sign In</button>

        </div>
    )
}

export default Login