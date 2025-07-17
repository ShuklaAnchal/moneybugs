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
      <div className="absolute inset-0 z-10 lg:px-6 md:px-6 px-3 lg:py-6 md:py-6 py-3">
        {/* Image with rounded corners */}
        <div className="relative w-full h-full rounded-[14px] overflow-hidden">
          <Image
            src={TrackingPeople}
            alt="foreground"
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay WITH padding and rounded corners */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#232326] to-[#ff494A]/60 z-20 lg:px-0 md:px-0 px-3">
       <div className='flex flex-col justify-center items-center text-white h-full gap-2'>
           <h6 className='font-medium lg:text-[14px] text-[10px] uppercase tracking-[1px]'>Quisque vel ortor</h6>
            <h1 className="lg:text-[36px] md:text-[30px] text-[25px] font-semibold">
              Start Tracking Your Claims
            </h1>
            <div className='h-[80px] lg:w-[715px] md:w-[600px] w-[90%] rounded-[8px] py-3 px-6 bg-white mt-5'>
              <div className='flex lg:flex-row md:flex-row flex-col lg:gap-1 md:gap-1 gap-7'>
                <input className='lg:px-28 py-4 text-start' placeholder='Enter Tracking Number ' />
              <button type='submit' className='bg-primary text-white font-medium text-[16px] lg:py-3 lg:px-12 md:py-3 md:px-12 py-4 rounded-full'>Track Your Claim </button>
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