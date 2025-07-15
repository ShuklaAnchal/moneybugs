import React from 'react';
import Image from 'next/image';
import Tracking from "@/icons/main/tracking-shape.png";
import TrackingPeople from "@/icons/main/tracking-peo.jpg";

const TrackClaim = () => {
  return (
    <div className="w-full h-[423px] relative mb-32">
      {/* Background Image */}
      <Image
        src={Tracking}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

          {/* Foreground Image with Overlay */}
      <div className="absolute inset-0 z-10 px-6 py-6">
        {/* Image with rounded corners */}
        <div className="relative w-full h-full rounded-[14px] overflow-hidden">
          <Image
            src={TrackingPeople}
            alt="foreground"
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay WITH padding and rounded corners */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#232326] to-[#ff494A]/60 z-20">
       <div className='flex flex-col justify-center items-center text-white h-full gap-2'>
           <h6 className='font-medium text-[14px] uppercase tracking-[1px]'>Quisque vel ortor</h6>
            <h1 className="text-[36px] font-semibold">
              Start Tracking Your Claims
            </h1>
            <div className='h-[80px] w-[715px] rounded-[8px] py-3 px-6 bg-white mt-5'>
              <div className='flex gap-1'>
                <input className='px-28 py-4 text-start' placeholder='Enter Tracking Number ' />
              <button type='submit' className='bg-primary text-white font-medium text-[16px] py-3 px-12 rounded-full'>Track Your Claim </button>
              </div>
            </div>
       </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackClaim;
