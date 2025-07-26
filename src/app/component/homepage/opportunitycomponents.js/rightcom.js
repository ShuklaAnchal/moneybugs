"use client";
import React from "react";
import Image from "next/image";


const RightCom = ({
  cardData = [],
  paddings,
  backgroundImage,
}) => {
  return (
    <div className={`relative w-full md:w-1/2 h-full`}>
      {/* Background image (only on md and up) */}
      <Image
        src={backgroundImage}
        alt="background"
        className={`absolute h-full w-full inset-0 z-0 object-fill hidden lg:block ${paddings}`}
      />

      {/* Card Content */}
      <div className="relative h-full z-10 flex flex-col justify-center items-center gap-6 px-4 sm:px-6 md:px-10 py-10 md:py-16">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[500px] bg-white rounded-[10px] p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between shadow-md"
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3 md:gap-4 w-full md:w-[50%] mb-4 md:mb-0">
              <div className="text-primary text-[35px] sm:text-[40px] md:text-[50px]">
                {item.icon}
              </div>
              <div className="font-semibold text-[18px] text-black leading-tight">
                {item.heading}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-[1px] h-[70%] bg-gray-300 mx-4"></div>

            {/* Description */}
            <div className="text-gray-600 text-[14px] sm:text-[15px] text-center md:text-left w-full md:w-[50%]">
              {item.para}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightCom;
