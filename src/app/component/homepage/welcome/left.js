import React from 'react'
import Image from 'next/image'
import WelcomeImage from "@/icons/main/welcome.jpg"
import { FaHands } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";

const left = () => {
  return (
    <div className='w-[45%] h-[70%] flex justify-center items-center'>
  <div className='h-full w-full relative' >
          <Image src={WelcomeImage} alt='welcome image ' className='abolsute inset-0 h-full w-full rounded-[16px]'/>
        <div className='bgclo relative h-[30%] w-[85%] rounded-[16px] bottom-[20%] flex justify-center items-center px-10 gap-6'>
  <div className="relative w-[50px] h-[40px] text-white">
    {/* Hands icon as base */}
    <FaHands className="w-[50px] h-[40px]" />

    {/* Verified icon positioned in center */}
    <MdOutlineVerifiedUser className="absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[24px] h-[25px] rounded-full p-[2px]" />
  </div>         <div className='text-[26px] text-white font-semibold'>We’re always here
to help you</div>
        </div>
  </div>
    </div>
  )
}

export default left