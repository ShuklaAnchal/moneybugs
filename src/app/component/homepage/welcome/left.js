import React from 'react'
import Image from 'next/image'
import WelcomeImage from "@/icons/main/welcome.jpg"
import { FaHands } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";

const left = () => {
  return (
    <div className='lg:w-[45%] lg:h-[70%] w-[95%] flex justify-center items-center'>
  <div className='h-full w-full relative' >
          <Image src={WelcomeImage} alt='welcome image ' className='abolsute inset-0 h-full w-full rounded-[16px]'/>
        <div className='bgclo relative lg:h-[30%] h-auto lg:py-0 py-5 lg:w-[85%] w-[70%] rounded-[16px] lg:bottom-[20%] bottom-[50px] flex justify-center items-center lg:px-10 px-2 gap-6'>
  <div className="relative lg:w-[50px] w-auto h-[40px] text-white">
    {/* Hands icon as base */}
    <FaHands className="w-[50px] h-[40px]" />

    {/* Verified icon positioned in center */}
    <MdOutlineVerifiedUser className="absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[24px] h-[25px] rounded-full p-[2px]" />
  </div>         
  <div className='lg:text-[26px] text-[20px]  text-white font-semibold'>We’re always here
to help you</div>
        </div>
  </div>
    </div>
  )
}

export default left