"use client";
import React from "react";
import Image from "next/image";

import { FaHandSparkles } from "react-icons/fa";
import { GiNotebook, GiTakeMyMoney } from "react-icons/gi";

const cardData = [
  {
    id: 1,
    icon: <FaHandSparkles />,
    heading: "Fast & Easy Process",
    para: "There are many not of age of rm available the majority.",
  },
  {
    id: 2,
    icon: <GiNotebook />,
    heading: "Quick Claim Handle",
    para: "There are many not of age of rm available the majority.",
  },
  {
    id: 3,
    icon: <GiTakeMyMoney />,
    heading: "Save Your Money",
    para: "There are many not of age of rm available the majority.",
  },
];

const RightCom = () => {
  return (
    <div className="relative w-full md:w-[50%] h-full">
      <img
        src="https://theme9.nisharindia.in/assets/images/update-10-02-2023/blog/news-5-1.jpg"
        alt="background image"
        className="absolute h-full w-full inset-0 z-0 object-cover"
      />

      <div className="flex relative flex-col justify-center items-center h-full gap-6 px-4 py-8 z-10">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="w-[465px] h-[133px] bg-white rounded-[8px] p-6 flex items-center justify-start shadow-md"
          >
            {/* Icon & Title */}
            <div className="flex items-center gap-4 w-[50%]">
              <div className="text-red-500 text-[50px]">{item.icon}</div>
              <div className="font-semibold text-[18px] text-black leading-tight">
                {item.heading}
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="w-[1px] h-[70%] bg-gray-300 mx-4"></div>

            {/* Description */}
            <div className="text-gray-500 text-[15px] w-[50%]">
              {item.para}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightCom;
