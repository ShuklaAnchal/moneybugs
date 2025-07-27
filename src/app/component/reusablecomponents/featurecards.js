"use client";
import React from "react";
import Image from "next/image";

const FeatureCards = ({ features = [] }) => {
  if (!features.length) return null; // Avoid rendering if no features

  return (
    <div className="flex justify-center items-center">
      <div className="bg-[#edf2f3] rounded-tr-[40px] rounded-bl-[40px] p-6 md:p-10 flex flex-col md:flex-row gap-8 md:gap-16 items-start justify-start mt-16 w-[90%]">
        {features.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4 w-full md:w-auto">
            {/* Icon Circle */}
            <div className="min-w-[60px] min-h-[60px] flex items-center justify-center bg-primary rounded-full p-2">
              <Image
                src={item.icon}
                alt={item.title || "icon"}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            {/* Text Content */}
            <div>
              <h4 className="text-base md:text-lg font-semibold text-[#004d40]">
                {item.title}
              </h4>
              <p className="text-sm md:text-base text-gray-600 mt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
