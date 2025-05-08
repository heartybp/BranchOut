import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgBar from './ProgressBar';

const Loading = () => {

    return (
        <div className="flex h-screen text-[#F5F5DC]">
            <div className="relative w-3/5 pr-4 h-full bg-emerald-800">
                <img className="w-full h-2/3" src="/src/assets/login-cover.jpg" />
                <div className='flex w-full h-1/3 px-10'>
                    <img className="w-1/2 h-full" src="/src/assets//branchOUT-Logo.png" />
                    <div className='w-1/2 mt-auto text-right mb-4'>
                        <div className='text-[60px] font-bold'>branchOUT</div>
                        <div className='text-[28px]'>grow your network</div>
                    </div>    
                </div>
            </div>

            <div className="w-2/5 bg-white h-screen">
                <div className="flex h-full pt-20 flex-col w-full ">
                    <div className='flex flex-col bg-emerald-800 w-full h-1/5 items-center justify-center'>
                        <div className='text-[60px] font-bold text-center'>BranchOut!</div>
                    </div>
                    <div className="flex h-4/5 pt-10 w-full flex-col items-center justify-center text-black">
                        <div>Logging you in...</div>
                        <div className=' flex flex-col w-4/5 bg-gray-400 rounded-2xl h-5px justify-center text-left'>
                            <ProgBar loading={true}/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Loading;