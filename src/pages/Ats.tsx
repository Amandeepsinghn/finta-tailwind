import React, { useState } from 'react'
import { SideBar } from '../component/Sidebar';


const Ats = () => {
    const [showSideBar,setSideBar] = useState<boolean>(true)
    return (
        <div className='flex '>
            <SideBar showSideBar={showSideBar} setSideBar={setSideBar}/>
            <div className={`flex-1 bg-gray-50 ${showSideBar?"h-screen":"ml-20 h-screen md:ml-0 "}`}>
                <div className='p-6'>
                    <h2 className='font-bold text-gray-800 text-2xl'>
                        Resume ATS Checker
                    </h2>
                    <div className='grid grid-cols-1 grid-rows-2 gap-8  text-gray-800 mt-5'>
                        <div className=' flex flex-col items-start p-4 space-y-2 shadow-md border-gray-200 rounded-lg'>
                            <div className='font-bold'>
                                📤 Upload Your Resume (PDF)
                            </div>
                            <div className='flex justify-start space-x-2 items-center'>
                                <button className='text-white bg-indigo-600 hover:bg-indigo-700 p-2 rounded-md text-shadow-2xs cursor-pointer'>
                                    Choose File
                                </button>
                                <div className='text-gray-700'>
                                    No file chosen
                                </div>
                            </div>
                            <div className='text-green-400'>
                                Uploaded Resume: ###
                            </div>
                        </div>
                        <div className=' flex flex-col items-start p-4 space-y-2  shadow-md border-gray-200 rounded-lg'>
                            <div className='font-bold'>
                                📈 Latest ATS Score
                            </div>
                            <div className='text-gray-600'>
                                Resumeui
                            </div>
                            <div className='h-2 w-full bg-gray-200'>
                                <div className='h-2 w-full bg-indigo-600' style={{width:`${82}%`}}>
                                </div>
                            </div>
                            <div className='text-gray-600 flex justify-start space-x-2.5'>
                                <div className=''>
                                    Score
                                </div>
                                <div className=''>
                                    <strong>82</strong>/100
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className='font-bold text-gray-800 text-lg'>
                            📁 Previously Scanned Resume
                        </div>
                        <div className='grid grid-cols-2 grid-rows-2 gap-4 mt-2'>
                            <div className='flex flex-col rounded-md bg-white shadow-md p-2 border-1 border-gray-200'>
                                <div className='flex justify-between items-center'>
                                    <div className=''>
                                        Resume Name
                                    </div>
                                    <div className='text-lg text-indigo-600'>
                                        82/100
                                    </div>
                                </div>
                                
                            </div>
                        </div> 
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Ats
