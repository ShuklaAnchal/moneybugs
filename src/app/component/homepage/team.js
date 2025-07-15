import React from 'react'
import Teamcard from './teamcom/teamcard'

const team = () => {
  return (
    <div className='h-screem w-full py-5'>
     <div className='container flex flex-col gap-10'>
     <div className='flex flex-col text-center items-center'>
         <p className='text-[16px] text-textsecondry'>Meet Our Team</p>
      <p className="text-[45px] font-semibold leading-[55px]">
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