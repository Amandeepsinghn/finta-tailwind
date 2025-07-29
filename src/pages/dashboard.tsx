import React, { useState } from 'react';
import { AiFillContainer } from "react-icons/ai";
import { SideBar } from '../component/Sidebar';




export default function Dashboard() {

    const [showSideBar,setSideBar] = useState<boolean>(true)
    const totalBlogs = 20;
    const blogsRead = 7; 
    const progress = Math.min(Math.round((blogsRead / totalBlogs) * 100), 100)
    
    const data = [
        {
            number:8,
            title:"Email sent"
        },{
            number:8,
            title:"ATS Checks"
        }, {
            number:8,
            title:"Blogs Read"
        }
    ]

    return (
        <div className='flex '>
            <SideBar showSideBar={showSideBar} setSideBar={setSideBar}/>
            <div className={`flex-1 bg-gray-50 ${showSideBar?"h-screen":"ml-20 h-screen md:ml-0 "}`}>
                <div className='p-6'>
                    <h2 className='font-bold text-gray-800 text-2xl'>
                        👋 Welcome back to Defuse
                    </h2>
                    <div className='grid grid-cols-1 grid-rows-3 gap-8 mt-8 md:grid-cols-2'>
                        {data.map((data,index)=>(
                            
                            data.title!="Blogs Read" ?(<div key={index} className='bg-white rounded-md shadow-md  flex-col justify-start p-3'>
                                <div className='text-gray-600 text-md font-semibold'>
                                    {data.title}
                                </div>
                                <div className='text-indigo-600 text-2xl font-semibold'>
                                    {data.number}
                                </div>
                                </div>)
                            : <div className='bg-white p-3 rounded-md shadow-md md:col-span-2'>
                                    <h2 className="text-lg font-semibold mb-4 text-gray-600">📚 Blog Progress</h2>
                                    <div className='flex justify-between text-gray-800 '>
                                        <div className=' text-sm'>
                                            Blogs Read
                                        </div>
                                        <div>
                                            {progress}%
                                        </div>
                                    </div>
                                    <div className='w-full bg-gray-200 rounded-full h-3'>
                                        <div className='h-3 bg-yellow-500 rounded-full transition-all duration-500'
                                        style={{width:`${progress}%`}}>
                                            </div>
                                    </div>
                                </div>
                        ))}
                    </div>
                    <div className='flex justify-center'>
                        <img
                        src="new.svg"
                        alt="Blog illustration"
                        className="w-80 mt-5 md-mt-0 md:w-80 object-cover h-auto"
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    )

}