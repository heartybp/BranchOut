import React from 'react'
import { useNavigate } from 'react-router-dom';
import {MailOutlined, DiscordOutlined, GoogleOutlined, UserOutlined, LockOutlined, QuestionCircleFilled} from '@ant-design/icons';
import { Leaf, School } from 'lucide-react';

const Login = () => {

    const navigate = useNavigate();

    const navigateSignUp = () => {
        navigate('/');
    };

    const navigateHome = () => {
        navigate('/home');
    };


    return (
        <div className="flex">
            {/* image component */}
            <div className="relative w-3/5 bg-emerald-800">
                <img class="absolute w-full h-full object-cover" src="/src/assets/login-cover.jpg" />
                <div className="absolute inset-0 bg-brandGreen bg-opacity-40"></div>
            </div>

            <div className="w-2/5 bg-lightGreen h-screen">
                <div className="flex items-center justify-center">
                    <div className="flex flex-col w-full">

                        <div className='flex items-center justify-center text-brandGreen'>
                            <h1 className='text-brandGreen font-bold text-4xl mt-28 mb-8'>BranchOut</h1>
                            <Leaf size={50} className='relative text-mediumGreen left-4 top-9'/>
                        </div>
                        

                        <div className="flex flex-col text-mediumGreen items-center justify-center space-y-1">
                            <h1 className="text-2xl font-semibold flex justify-center">Welcome Back!</h1>
                            <p>Sign in to continue</p>
                        </div>

                        <div className="w-4/5 mx-auto my-8 px-4">
                            <div className="flex items-center w-full">
                                <div className="flex-grow h-px bg-emerald-600"></div>
                                <span className="px-4 text-mediumGreen text-sm font-light">or continue with</span>
                                <div className="flex-grow h-px bg-emerald-600"></div>
                            </div>
                        </div>
                        
                        <div className="flex justify-center space-x-4 mb-8 text-mediumGreen ">
                            <button className="flex items-center justify-center rounded-full w-10 h-10 bg-white shadow-sm">
                                <School className="text-xl"/>
                            </button>

                            <button className="flex items-center justify-center rounded-full w-10 h-10 bg-white shadow-sm">
                                <GoogleOutlined className="text-xl"/>
                            </button>

                            <button className="flex items-center justify-center rounded-full w-10 h-10 bg-white shadow-sm">
                                <DiscordOutlined className="text-2xl"/>
                            </button>

                        </div>

                        <form action="" className="flex flex-col">

                            <div className="relative flex items-center justify-center">
                                <UserOutlined className="absolute pl-2 left-16 top-2.5 text-xl text-gray-400"/>
                                <input 
                                    type="email" 
                                    id="email" 
                                    placeholder="Email"
                                    className="w-4/5 p-2 pl-10 rounded-md mb-4 border border-gray-300 outline-none"
                                />
                            </div>
                            
                            <div className="relative flex items-center justify-center">
                                <LockOutlined className="absolute pl-2 left-16 top-2.5 text-xl text-gray-400"/>
                                <input 
                                    type="password" 
                                    id="password" 
                                    placeholder="Password"
                                    className="w-4/5 p-2 pl-10 rounded-md mb-4 border border-gray-300 outline-none"
                                />
                            </div>

                            <div className="flex justify-center">
                                <button 
                                    className="w-4/5 my-2 p-2 bg-brandGreen text-white rounded-md hover:bg-mediumGreen"
                                    onClick={navigateHome}
                                >
                                    Continue
                                </button>
                            </div>

                            
                        </form>

                        <div className='flex flex-col items-center mt-4 text-sm text-mediumGreen'>
                            <p className="cursor-pointer">Forgot Password</p>
                            <p className="cursor-pointer" onClick={navigateSignUp}>New User</p>


                            <div className="flex flex-row items-center justify-center text-gray-500 mt-10">
                                <QuestionCircleFilled/>
                                <p className="pl-2">Need help or support</p>
                            </div>

                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login