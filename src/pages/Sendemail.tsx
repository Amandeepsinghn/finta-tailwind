import React, { useCallback, useRef, useState } from 'react'
import { SideBar } from '../component/Sidebar'
import { GoPeople } from "react-icons/go";

import {useDropzone} from 'react-dropzone'
import { HiX } from "react-icons/hi";
import type { AxiosError } from 'axios';

const Sendemail = () => {
    const [showSideBar,setSideBar] = useState<boolean>(true)

    const [email,setEmail] = useState<string[]>([])

    const emailRef= useRef<HTMLInputElement>(null)

    const formData = new FormData();

    const onDrop = useCallback(async (files:File[]) => {
        if (files[0].type==="application/pdf") {
            formData.append('file',files[0])
            try{
                alert("pdf uploaded")

            } catch(error:unknown) {
                const err = error as AxiosError

                if(err.response) {
                    alert("unable to upload file please try again later.")
                }
            }
        } else {
            alert("please upload pdf file")
        }
    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    const removeElement = (idToRemove:number) => {
        const updatedItems = email.filter((email,index)=>index!=idToRemove)
        setEmail(updatedItems)
    }

    return (
                <div className='flex '>
                    <SideBar showSideBar={showSideBar} setSideBar={setSideBar}/>
                    <div className={`flex-1 bg-gray-50 ${showSideBar?"h-screen":"ml-20 h-screen md:ml-0 "}`}>
                        <div className="p-6">
                            <div className='flex justify-center'>
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-700 to-purple-500 flex items-center justify-center shadow-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-7 h-7 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="m22 2-7 20-4-9-9-4Z" />
                                    <path d="M22 2 11 13" />
                                </svg>
                            </div>
                            </div>
                            <div className='flex flex-col justify-center items-center pt-3'>
                                <h1 className='font-semibold text-2xl'>
                                    Compose Email
                                </h1>
                                <p className='max-w-sm mx-auto text-gray-700 text-center pt-2'>
                                    Send professional email with ease 
                                </p>
                            </div>
                            <div className='grid grid-cols-1 grid-rows-1 text-gray-800 bg-white shadow-md rounded-lg'>
                                <div className='flex flex-col p-3 space-y-1'>
                                    {/* add recipents */}
                                    <div className='flex justify-start items-center space-x-2'>
                                        <GoPeople />
                                        <div>
                                            Recipents
                                        </div>                            
                                    </div>
                                    <div className='grid grid-cols-1 grid-rows-1 text-white gap-1'>
                                        {email.map((email,index)=>(
                                            <div key={index} className='bg-gradient-to-br bg-indigo-600 rounded-md shadow-sm text-center flex justify-between p-1'>
                                                <div>
                                                    {email}
                                                </div> 
                                                <button className=' cursor-pointer' onClick={async()=>{
                                                    removeElement(index)
                                                }}>
                                                    <HiX size={20}/>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='flex justify-between text-gray-600 '>
                                        <input className='border border-gray-200 bg-gray-100 rounded-md outline-0 pl-2 max-w-50' placeholder='Add email address' ref={emailRef}/>
                                        <button className=' px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md cursor-pointer' onClick={async()=>{
                                            const newEmail = emailRef.current?.value
                                            if(newEmail) {
                                                setEmail(prev=>[...prev,newEmail])
                                            }
                                        }}>
                                            +Add 
                                        </button>
                                    </div>
                                    <div className='flex flex-col space-y-1 '>
                                        <div className='text-gray-800'>
                                            Subject *
                                        </div>
                                        <input className='border border-gray-200 text-gray-600 bg-gray-100 rounded-md outline-0 pl-2 ' placeholder='Application  for position title'/>
                                    </div>
                                    <div className='flex flex-col space-y-1 '>
                                        <div className='text-gray-800'>
                                            Message *
                                        </div>
                                        <textarea placeholder="Dear Hiring Manager,&#10;&#10;I am writing to express my interest in the [Position Title] role at [Company Name]...&#10;&#10;Best regards,&#10;[Your Name]" rows={12}
                                        className="w-full bg-gray-50 rounded-md p-1 shadow-sm border border-gray-100 outline-0"/>
                                    </div>
                                    <div className='flex flex-col space-y-1 '>
                                        <div className='text-gray-800'>
                                            Attachements
                                        </div>
                                         <div className="border-2 border-dotted rounded h-20  border-gray-200 bg-gray-100" {...getRootProps()}>
                                            <input {...getInputProps()}/>
                                            <div className='text-gray-600 max-w-[220px] text-center mx-auto h-full items-center pt-2'>
                                                Drop your resume here or click to browse
                                            </div>
                                            </div>
                                    </div>
                                    <div className='flex flex-col space-y-1'>
                                         <div className="p-1 pb-4 rounded-xl border  border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50 ">
                                            <div className='font-bold'>
                                                AI Writing Assistant
                                            </div>
                                            <div className='grid grid-cols-1 grid-rows-1 bg-white shadow-sm rounded-md'>
                                                <div className='flex rounded-md text-gray-800 flex-col justify-start p-1 cursor-pointer hover:bg-indigo-400 '>
                                                    <div className='text-md'>
                                                        <div>
                                                        Professional Tone
                                                        </div>
                                                        <div className='text-gray-600 text-sm'>
                                                            Make it more Formal
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Sendemail
