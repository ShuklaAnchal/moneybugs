import React from 'react'

const start = () => {
  return (
    <div className='w-full h-auto'> 
      <div className=' h-[40vh] w-full flex flex-col justify-center items-center'>
     <h1 className='text-[45px] font-bold text-primary' >About Us</h1>
    </div>

    <div className='w-full flex h-[40vh] flex-row container'>
   <div className='text-[30px] text-primary font-bold w-[45%]'>We are Bhopal's Leading Insurance Consultancy</div>
 <div className='text-[16px] text-texthearder w-[47%] mt-14'>
    Money Bugs provides comprehensive insurance solutions, offering expert guidance and policy comparisons to help clients choose the best coverage. We focus on transparency, affordability, and customer satisfaction to ensure a hassle-free experience.
 </div>
    </div>
    </div>
  )
}

export default start