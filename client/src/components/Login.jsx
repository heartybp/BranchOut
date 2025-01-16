import React from 'react'

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-orange-50">
        <div className="flex flex-col w-1/4 bg-orange-200 p-10 rounded-md">
            <h1 className="flex justify-center">Simple Sign Up Component</h1>
            <form action="" className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name"
                    placeholder="Peter Anteater"
                    className="p-1 rounded-md"
                />

                <label htmlFor="name">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="petrant@uci.edu"
                    className="p-1 rounded-md"
                />

                <label htmlFor="name">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="Enter a password"
                    className="p-1 rounded-md"
                />
            </form>
        </div>
    </div>
  )
}

export default Login
