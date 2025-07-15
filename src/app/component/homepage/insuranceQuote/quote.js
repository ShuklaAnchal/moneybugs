import React from 'react'
import Image from 'next/image'
import firstbg from "@/icons/main/insuranceshape1.png";
import secondbg from "@/icons/main/insurance-shape2.png";

import InsuranceQuote from "./textandformlayer"

const Quote = () => {
  return (
    <div className='h-[110vh] w-full relative bg-[#f3f3f3] overflow-hidden'>
      
      {/* Top background image */}
      <Image 
        className='absolute inset-0 w-[80%] h-full left-[20%] object-cover z-0' 
        src={secondbg} 
        alt='insurance background' 
      />

      {/* Bottom overlay image */}
      <Image 
        className='absolute bottom-0 w-full h-[25%] object-cover z-10' 
        src={firstbg} 
        alt='insurance bottom background' 
      />

      {/* Text Content */}
      <div className="container relative z-20 w-full h-full">
        <InsuranceQuote />
      </div>
    </div>
  )
}

export default Quote
