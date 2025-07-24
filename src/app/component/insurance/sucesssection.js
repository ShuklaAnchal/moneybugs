"use client"
import React from "react";

const SuccessSection = ({
  heading ,
  tagline ,
  paragraphs = [],
  stats = [],
  buttonText ,
  onButtonClick,
}) => {
  return (
    <section className="bg-[#f7faff] py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          {tagline && (
            <p className="text-sm text-blue-600 font-medium mb-2">{tagline}</p>
          )}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {heading}
          </h2>
          {paragraphs.map((para, i) => (
            <p key={i} className="text-gray-700 mb-4">
              {para}
            </p>
          ))}

          {buttonText && (
            <button
              onClick={onButtonClick}
              className="bg-blue-200 px-8 py-3 rounded-full"
            >
              {buttonText}
            </button>
          )}
        </div>

        {/* Stats */}
<div className="relative pl-6 md:pl-10 ">
  {/* Vertical line */}
  <div className="absolute top-0 left-3.5 md:left-4 w-0.5 bg-gray-200 h-full"></div>

  {/* Cards */}
  <div className="flex flex-col gap-6">
    {stats.map((stat, index) => (
      <div key={index} className="relative flex items-start gap-4">
        {/* Dot */}
        <div className="absolute left-[-29px] top-6 w-3 h-3 bg-[#00B084] rounded-full border-2 border-white shadow-md z-10"></div>

        {/* Card Content */}
        <div className="ml-6 md:ml-8 bg-white rounded-2xl py-4 px-10 shadow-md w-full">
          <div className="text-blue-600 text-2xl mb-2">{stat.icon}</div>
          <h3 className="text-xl font-bold text-gray-900">{stat.value}</h3>
          <p className="text-gray-600 text-sm">{stat.label}</p>
        </div>
      </div>
    ))}
  </div>
</div>



      </div>
    </section>
  );
};

export default SuccessSection;
