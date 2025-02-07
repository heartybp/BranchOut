import React from 'react'

const Login = () => {
  return (
    // <div className="flex items-center justify-center h-screen bg-orange-50">
    <div className="flex items-center justify-center h-screen text-gray-600 bg-blue-300">
        <div className="flex flex-col w-1/3 bg-gray-50 p-10 rounded-md shadow-xl shadow-gray-500">
            <h1 className="text-4xl font-extrabold flex justify-center mb-10 ">Sign In</h1>
            <form action="" className="flex flex-col">
                <label htmlFor="name" className="mb-2 font-semibold">NAME</label>
                <input 
                    type="text" 
                    id="name"
                    placeholder="Peter Anteater"
                    className="p-2 rounded-md mb-10 border border-gray-400 outline-none focus:outline focus:outline-blue-500"
                    // className=""
                />

                <label htmlFor="name" className="mb-2 font-semibold">EMAIL</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="petrant@uci.edu"
                    className="p-2 rounded-md mb-10 border border-gray-400 outline-none focus:outline focus:outline-blue-500"
                />

                <label htmlFor="name" className="mb-2 font-semibold">PASSWORD</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="Enter a password"
                    className="p-2 rounded-md mb-8 border border-gray-400 outline-none focus:outline focus:outline-blue-500"
                />

                <label htmlFor="name" className="mb-2 font-semibold">CONFIRM PASSWORD</label>
                <input 
                    type="password"
                    id="password"
                    placeholder="Re-enter password"
                    className="p-2 rounded-md mb-8 border border-gray-400 outline-none focus:outline focus:outline-blue-500"
                />

                <button className="mt-4 p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
                    Sign In
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login
