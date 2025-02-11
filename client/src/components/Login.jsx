import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const navigateSignUp = () => {
        navigate('/');
    };

    const navigateHome = () => {
        navigate('/home');
    };


    return (
        <div className="flex items-center justify-center h-screen text-gray-600 bg-emerald-800">
            <div className="flex flex-col w-1/3 bg-gray-50 p-10 rounded-md shadow-md shadow-gray-800">
                <h1 className="text-4xl font-bold flex justify-center mb-6">Log In</h1>

                <form action="" className="flex flex-col">

                    <label htmlFor="name" className="mb-1 font-semibold">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="petrant@uci.edu"
                        className="p-2 rounded-md mb-4 border border-gray-400 outline-none focus:outline focus:outline-blue-500"
                    />

                    <label htmlFor="name" className="mb-1 font-semibold">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Enter a password"
                        className="p-2 rounded-md mb-4 border border-gray-400 outline-none focus:outline focus:outline-blue-500"
                    />

                    <button 
                    className="mt-4 p-3 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700"
                    onClick={navigateHome}
                    >
                        Log In
                    </button>

                    <button 
                        className="mt-2 p-3 bg-gray-300 text-white font-semibold rounded-md hover:bg-gray-400"
                        onClick={navigateSignUp}
                    >
                        Create new account
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login