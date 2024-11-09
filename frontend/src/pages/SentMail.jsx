import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
export default function SentMail() {
  return (
    <div className='relative'>
      <div className="flex flex-col absolute top-[200px] left-[600px]">
      <h1 className="text-[40px] text-white ">Check email</h1>
      <p className='text-pure-greys-300 w-[444px] text-[18px]'>We have sent the reset email to youremailaccount@gmail.com</p>
      <button className=" w-[300px] mt-[40px] inline-block rounded bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-200 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] hover:scale-100">Resend Password</button>
      <Link className="flex gap-3 text-pure-greys-400 hover:text-white ">
      <FaArrowLeft className=' mt-[30px] ' />
      <p className=' text-[13px] mt-[30px]'>Back to login</p>
      </Link>
      </div>
      
    </div>
  )
}
