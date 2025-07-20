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
    <section className="bg-[#f7faff] py-16 px-4 md:px-10">
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
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 flex items-start gap-4"
            >
              <div className="text-blue-600 text-3xl">{stat.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
