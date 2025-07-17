import React from 'react'
import Teamcard from './teamcom/teamcard'

const team = () => {
  return (
    <div className='h-screem w-full py-5'>
     <div className='lg:container md:container px-3 flex flex-col gap-10'>
     <div className='flex flex-col text-center items-center'>
         <p className='lg:text-[16px] md:text-[16px] sm:[12px] text-textsecondry'>Meet Our Team</p>
      <p className="lg:text-[45px] md:text-[30px] text-[25px] font-semibold lg:leading-[55px] leading-[40px]">
    <span>Awesome Experienced</span>
  <br />
  <span>Team Ready to Help</span>
</p>
     </div>
     <Teamcard />
     </div>
    </div>
  )
}

export default team