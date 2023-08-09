import React from 'react'

const Login =() => {
    return (
        <div className="items-center justify-center m-10">
        <div className="flex flex-col items-center justify-center text-2xl">
            Student Login
        </div>
        <form className="space-y-4 xs:w-full p-20">
            <div className="flex flex-col items-center justify-center">
                <input 
                    type="text" 
                    placeholder="SRN" 
                    className="input input-ghost w-full max-w-xs" 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="input input-ghost w-full max-w-xs" 
                />
            </div>
            <div className="flex flex-col items-center">
                <button 
                    className="btn btn-active btn-secondary w-1/4"
                >Sign In</button>
            </div>
        
        <h4 
            className="w-full text-center text-sm text-gray-500 mt-6"
            >Don't have an account? <a href="#"> Sign Up</a>
        </h4>
        </form>
        </div>
    )
}

export default Login