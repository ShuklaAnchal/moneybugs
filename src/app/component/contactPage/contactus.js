import React from 'react'
import Uppernavbar from "@/app/component/uppernavbar";
import Map from "./map"

import Detailes from "@/app/component/navbar.js/detailes"
import Social from "@/app/component/navbar.js/social"
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const contactus = () => {
  return (
  <div className='flex flex-col bg-[#F3F3F3]'>
      <div className='h-[40vh] w-full flex flex-col justify-center items-center bg-[#F3F3F3]'>
     <h1 className='text-[45px] font-bold text-black' >Contact Us</h1>
     <p className='text-[16px] font-normal text-textsecondry w-[40%] text-center'> Get in touch with us for expert insurance guidance and seamless support. Whether you need policy assistance, claims help, or expert consultation, our team is ready to assist you. Reach out today!
     </p>
    </div>

   <div className='flex w-full justify-between items-center container py-10 gap-8'>
    <div className='flex flex-col w-[40%] text-start gap-4'>
    <h1 className='text-[30px] font-bold text-black'>Get In Touch</h1>
    <p className='text-[16px] font-normal text-textsecondry w-[70%]'> Get in touch with us for expert insurance guidance and seamless support. Whether you need policy assistance, claims help, or expert consultation, our team is ready to assist you. Reach out today!</p>

     <div className="flex flex-col gap-4 text-sm text-texthearder">
               <div className="flex items-center gap-2">
                 <FaSquarePhone className="text-primary h-5 w-5" />
                 888 999 0000
               </div>
               <div className="flex items-center gap-2">
                 <MdEmail className="text-primary h-5 w-5" />
                 needhelp@insur.com
               </div>
               <div className="flex items-start gap-2">
                 <IoLocationSharp className="text-primary h-5 w-5" />
                 <span>30 road, broklyn street new york 600</span>
               </div>
             </div>

 <div className='border-t-[1px] border-grey-500 mt-5'>
  <h3 className='text-[25px] font-bold text-black mt-4 mb-3'>Follow US:</h3>
    <Social />
 </div>
   
    </div>
  <div className="w-full lg:w-[40%] bg-white rounded-2xl shadow-md px-6 py-8">
  <h2 className="text-[24px] font-bold text-black mb-6">Send a Message</h2>

  <form className="flex flex-col gap-4">
    <input
      type="text"
      placeholder="Name"
      className="border-b border-gray-300 outline-none py-2 placeholder:text-gray-400"
    />
    <input
      type="email"
      placeholder="E-mail address"
      className="border-b border-gray-300 outline-none py-2 placeholder:text-gray-400"
    />
    <textarea
      placeholder="Message"
      rows="4"
      className="border-b border-gray-300 outline-none py-2 placeholder:text-gray-400 resize-none"
    ></textarea>

    <p className="text-xs text-gray-400 mt-2">
      By Submitting, you agree to the processing of your personal data by Subx as described in the Privacy Statement.
    </p>

    <button
      type="submit"
      className="mt-4 self-end bg-[#FF6A00] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition"
    >
      Submit
    </button>
  </form>
</div>

    </div> 

<div className='w-full flex justify-center items-center mb-16'>
      <Map />
</div>
  </div>
  )
}

export default contactus