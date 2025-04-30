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
        <div className="flex h-screen text-[#F5F5DC]">
            <div className="relative w-3/5 pr-4 h-full bg-emerald-800">
                <img class="w-full h-2/3" src="/src/assets/login-cover.jpg" />
                <div className='flex w-full h-1/3 px-10'>
                    <img class="w-1/2 h-full" src="/src/assets//branchOUT-Logo.png" />
                    <div className='w-1/2 mt-auto text-right mb-4'>
                        <div className='text-[80px] font-bold'>branchOUT</div>
                        <div className='text-[28px]'>grow your network</div>
                    </div>    
                </div>
            </div>

            <div className="w-2/5 bg-white h-screen">
                <div className="h-full">
                    <div className="flex h-full pt-20 flex-col w-full ">
                        <div className='flex flex-col bg-emerald-800 w-full h-1/5 items-center justify-center'>
                            <div className='text-[60px] font-bold'>Welcome Back!</div>
                            <div className='text-[25px]'>Enter your login information below:</div>
                        </div>
                        <form action="" className="flex w-full h-3/5 flex-col items-center justify-center text-black">
                            <div className=' flex flex-col w-4/5 items-center text-left'>
                                <div className="w-full">
                                    <div className=''>Username</div>
                                    <input 
                                        type="text" 
                                        id="username" 
                                        placeholder="Your Username"
                                        className="w-full p-2 px-3 mr-1 rounded-md mb-4 border border-gray-300 outline-none"
                                    />
                                </div>
    
                                <div className="w-full">
                                    <div>Password</div>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        placeholder="Your password"
                                        className="w-full p-2 px-3 rounded-md mb-4 border border-gray-300 outline-none"
                                    />
                                    <p className="cursor-pointer text-right">Forgot your password?</p>
                                </div>
    
                                <div className="w-2/5 flex -center">
                                    <button 
                                        className="w-full my-2 p-2 bg-brandGreen text-white rounded-3xl hover:bg-mediumGreen"
                                        onClick={navigateHome}
                                    >
                                        Continue
                                    </button>
                                </div>
                                <p className="cursor-pointer" onClick={navigateSignUp}>Don't have an account?</p>
                            </div>
                        </form>
                    
                        <div className='flex flex-col items-center mt-auto mb-4 text-sm text-mediumGreen'>
                            <div className="flex flex-row items-center justify-center text-gray-500">
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