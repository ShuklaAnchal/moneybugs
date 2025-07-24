"use client";
import React from "react";
import Image from "next/image";

const InvestmentSection = ({
  title ,
  subtitle,
  description,
  ctaText,
  phone,
  whatsappText,
  imageSrc,
}) => {
  return (
    <section className="bg-insurancebackground py-16 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <h1 className="text-5xl md:text-6xl font-semibold text-textinsu leading-tight">
          {title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </h1>
        <p className="mt-8 font-semibold text-textinsu text-lg">{subtitle}</p>
        <p className="mt-2 text-textinsu text-base leading-relaxed">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="bg-btnsecondcolor text-white px-8 py-3 rounded-md shadow hover:bg-[#ff5722] transition">
            {ctaText}
          </button>
          <div className="flex items-center space-x-3 bg-white px-5 py-3 rounded-md shadow">
            <div className="text-orange-500 text-xl">📞</div>
            <div className="text-left text-textinsu">
              <p className="text-sm">{whatsappText}</p>
              <p className="font-semibold">{phone}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 flex justify-center">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt="Investment Visual"
            className="max-w-[80%] max-h-[60%]"
          />
        )}
      </div>
    </section>
  );
};

export default InvestmentSection;
