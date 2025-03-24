import React from 'react'
import { useNavigate } from 'react-router-dom';
import {MailOutlined, DiscordOutlined, GoogleOutlined, 
    UserOutlined, LockOutlined, LockFilled, QuestionCircleFilled, MailFilled} from '@ant-design/icons';
import { Leaf } from 'lucide-react';


const SignUp = () => {

    const navigate = useNavigate();

    const navigateLogIn = () => {
        navigate('/login');
    };

    const navigateHome = () => {
        navigate('/home');
    };

  return (
    <div className="flex">
        {/* image component */}
        <div className="relative w-3/5 bg-emerald-800">
            <img class="absolute w-full h-full object-cover" src="/src/assets/login-cover.jpg" />
            <div className="absolute inset-0 bg-emerald-800 bg-opacity-40"></div>
        </div>

        <div className="w-2/5 bg-lightGreen h-screen">
            <div className="flex items-center justify-center">
                <div className="flex flex-col w-full">

                    <div className='flex items-center justify-center'>
                        <h1 className='text-emerald-900 font-bold text-4xl mt-20 mb-8'>BranchOut</h1>
                        <Leaf size={50} className='text-emerald-600 relative left-4 top-5'/>
                    </div>
                    

                    <div className="flex flex-col text-emerald-700 items-center justify-center space-y-1">
                        <h1 className="text-2xl font-semibold flex justify-center">Create an Account</h1>
                        <p>Fill out your information</p>
                    </div>

                    <div className="w-4/5 mx-auto my-8 px-4">
                        <div className="flex items-center w-full">
                            <div className="flex-grow h-px bg-emerald-600"></div>
                            <span className="px-4 text-emerald-600 text-sm font-light">or continue with</span>
                            <div className="flex-grow h-px bg-emerald-600"></div>
                        </div>
                    </div>
                    
                    <div className="flex justify-center space-x-4 mb-8">
                        <button className="flex items-center justify-center rounded-full w-10 h-10 bg-white shadow-sm">
                            <MailOutlined className="text-emerald-700 text-xl"/>
                        </button>

                        <button className="flex items-center justify-center rounded-full w-10 h-10 bg-white shadow-sm">
                            <GoogleOutlined className="text-emerald-700 text-xl"/>
                        </button>

                        <button className="flex items-center justify-center rounded-full w-10 h-10 bg-white shadow-sm">
                            <DiscordOutlined className="text-emerald-700 text-2xl"/>
                        </button>

                    </div>

                    <form action="" className="flex flex-col items-center">
                        
                        <div className="w-4/5 relative flex items-center justify-center">
                        
                            <UserOutlined className="absolute left-2.5 top-2.5 text-xl text-gray-400"/>
                            <input 
                                type="text" 
                                id="firstName" 
                                placeholder="First Name"
                                className="w-11/12 p-2 pl-9 mr-1 rounded-md mb-4 border border-gray-300 outline-none"
                            />

                            <UserOutlined className="absolute left-60 top-2.5 text-xl text-gray-400"/>
                            <input 
                                type="text" 
                                id="lastName" 
                                placeholder="Last Name"
                                className="w-11/12 p-2 pl-10 rounded-md mb-4 border border-gray-300 outline-none"
                            />
                        </div>

                        <div className="w-full relative flex items-center justify-center">
                            <MailFilled className="absolute left-16 top-2.5 text-xl text-gray-400"/>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="Email"
                                className="w-4/5 p-2 pl-9 rounded-md mb-4 border border-gray-300 outline-none"
                            />
                        </div>

                        <div className="w-full relative flex items-center justify-center">
                            <LockOutlined className="absolute left-16 top-2.5 text-xl text-gray-400"/>
                            <input 
                                type="password" 
                                id="password" 
                                placeholder="Password"
                                className="w-4/5 p-2 pl-9 rounded-md mb-4 border border-gray-300 outline-none"
                            />
                        </div>

                        <div className="w-full relative flex items-center justify-center">
                            <LockFilled className="absolute left-16 top-2.5 text-xl text-gray-400"/>
                            <input 
                                type="password" 
                                id="passwordConfirm" 
                                placeholder="Confirm Password"
                                className="w-4/5 p-2 pl-10 rounded-md mb-4 border border-gray-300 outline-none"
                            />
                        </div>

                        <div className="w-full flex justify-center">
                            <button 
                                className="w-4/5 my-2 p-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-900"
                                onClick={navigateHome}
                            >
                                Continue
                            </button>
                        </div>

                        
                    </form>

                    <div className='flex flex-col items-center mt-4 text-sm text-emerald-700'>
                        <p className="cursor-pointer">Forgot Password</p>
                        <p className="cursor-pointer" onClick={navigateLogIn}>Already have an account</p>


                        <div className="flex flex-row items-center justify-center text-gray-400 mt-10">
                            <QuestionCircleFilled/>
                            <p className="pl-2">Need help or support</p>
                        </div>

                        
                    </div>

                </div>
            </div>
        </div>

        
        
    </div>
    // <div className="flex items-center justify-center h-screen text-gray-600 bg-emerald-800">
    //     <div className="flex flex-col w-1/3 bg-gray-50 p-10 rounded-md shadow-md shadow-gray-800">
    //         <h1 className="text-4xl font-bold flex justify-center mb-6">Create Account</h1>

    //         <form action="" className="flex flex-col">

    //             {/* first name, last name container */}
    //             <div className="mb-4 flex flex-row">

    //                 <div className='flex flex-col'>
    //                     <label htmlFor="name" className="mb-1 font-semibold">First Name</label>
    //                     <input 
    //                         type="text" 
    //                         id="firstName"
    //                         placeholder="Peter"
    //                         className="w-11/12 p-2 rounded-md border border-gray-400 outline-none focus:outline focus:outline-blue-500"
    //                     />

    //                 </div>

    //                 <div className='flex flex-col'>
    //                     <label htmlFor="name" className="mb-1 font-semibold pl-4">Last Name</label>
    //                     <input 
    //                         type="text" 
    //                         id="lastName"
    //                         placeholder="Anteater"
    //                         className="ml-4 w-11/12 p-2 rounded-md border border-gray-400 outline-none focus:outline focus:outline-blue-500"
    //                     />
    //                 </div>
                    
                    
    //             </div>
                

    //             <label htmlFor="email" className="mb-1 font-semibold">Email</label>
    //             <input 
    //                 type="email" 
    //                 id="email" 
    //                 placeholder="petrant@uci.edu"
    //                 className="p-2 rounded-md mb-4 border border-gray-400 outline-none focus:outline focus:outline-blue-500"
    //             />

    //             <label htmlFor="password" className="mb-1 font-semibold">Password</label>
    //             <input 
    //                 type="password" 
    //                 id="password" 
    //                 placeholder="Enter a password"
    //                 className="p-2 rounded-md mb-4 border border-gray-400 outline-none focus:outline focus:outline-blue-500"
    //             />

    //             <label htmlFor="name" className="mb-1 font-semibold">Confirm Password</label>
    //             <input 
    //                 type="password"
    //                 id="password"
    //                 placeholder="Re-enter password"
    //                 className="p-2 rounded-md mb-4 border border-gray-400 outline-none focus:outline focus:outline-blue-500"
    //             />

    //             <button 
    //                 className="mt-4 p-3 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700"
    //                 onClick={navigateHome}
    //             >
    //                 Sign Up
    //             </button>

    //             <button 
    //                 className="mt-2 p-3 bg-gray-300 text-white font-semibold rounded-md hover:bg-gray-400"
    //                 onClick={navigateLogIn}
    //             >
    //                 Already have an account
    //             </button>
    //         </form>
    //     </div>
    // </div>
  )
}

export default SignUp
