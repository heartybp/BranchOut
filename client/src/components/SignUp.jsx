import React from 'react'
import { useNavigate } from 'react-router-dom';



const SignUp = () => {

    const navigate = useNavigate();

    const navigateLogIn = () => {
        navigate('/login');
    };

    const navigateHome = () => {
        navigate('/home');
    };

  return (
    <div className="flex items-center justify-center h-screen text-gray-600 bg-emerald-800">
        <div className="flex flex-col w-1/3 bg-gray-50 p-10 rounded-md shadow-md shadow-gray-800">
            <h1 className="text-4xl font-bold flex justify-center mb-6">Create Account</h1>

            <form action="" className="flex flex-col">

                {/* first name, last name container */}
                <div className="mb-4 flex flex-row">

                    <div className='flex flex-col'>
                        <label htmlFor="name" className="mb-1 font-semibold">First Name</label>
                        <input 
                            type="text" 
                            id="firstName"
                            placeholder="Peter"
                            className="w-11/12 p-2 rounded-md border border-gray-400 outline-none focus:outline focus:outline-blue-500"
                        />

                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="name" className="mb-1 font-semibold pl-4">Last Name</label>
                        <input 
                            type="text" 
                            id="lastName"
                            placeholder="Anteater"
                            className="ml-4 w-11/12 p-2 rounded-md border border-gray-400 outline-none focus:outline focus:outline-blue-500"
                        />
                    </div>
                    
                    
                </div>
                

                <label htmlFor="email" className="mb-1 font-semibold">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="petrant@uci.edu"
                    className="p-2 rounded-md mb-4 border border-gray-400 outline-none focus:outline focus:outline-blue-500"
                />

                <label htmlFor="password" className="mb-1 font-semibold">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="Enter a password"
                    className="p-2 rounded-md mb-4 border border-gray-400 outline-none focus:outline focus:outline-blue-500"
                />

                <label htmlFor="name" className="mb-1 font-semibold">Confirm Password</label>
                <input 
                    type="password"
                    id="password"
                    placeholder="Re-enter password"
                    className="p-2 rounded-md mb-4 border border-gray-400 outline-none focus:outline focus:outline-blue-500"
                />

                <button 
                    className="mt-4 p-3 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700"
                    onClick={navigateHome}
                >
                    Sign Up
                </button>

                <button 
                    className="mt-2 p-3 bg-gray-300 text-white font-semibold rounded-md hover:bg-gray-400"
                    onClick={navigateLogIn}
                >
                    Already have an account
                </button>
            </form>
        </div>
    </div>
  )
}

export default SignUp
