// components/ConfusionSection.jsx
import React from "react";
import Image from "next/image";
import Background from "@/icons/health/health-background.png";

const ConfusionSection = ({
  title,
  description,
  phone,
  showForm = true,
}) => {
  return (
    <div className="relative w-full h-fit">
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full z-0">
        <Image
          src={Background}
          alt="Background"
          fill
          priority
          className="object-cover w-full h-full"
        />
        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full py-10 px-5 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10 text-white">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 lg:text-start sm:text-start text-center">
          <h2 className="text-[24px] md:text-[32px] font-bold mb-4 leading-snug">
            {title}
          </h2>
          <p className="text-[14px] md:text-[16px] text-white/90">{description}</p>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 bg-white text-black py-10 px-10 rounded-xl shadow-lg max-w-md">
          {showForm ? (
            <>
              <h3 className="text-[18px] md:text-[22px] font-semibold mb-4 text-center">
                Request a Callback
              </h3>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 rounded-md px-4 py-2 outline-none text-sm"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="border border-gray-300 rounded-md px-4 py-2 outline-none text-sm"
                />
                <textarea
                  placeholder="Your Message"
                  rows="3"
                  className="border border-gray-300 rounded-md px-4 py-2 outline-none text-sm resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="bg-primary hover:bg-orange-600 text-white text-sm font-medium px-4 py-3 rounded-full transition mt-2"
                >
                  Submit
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <span className="text-center font-medium text-[16px]">Call Us Now</span>
              <a
                href={`tel:${phone}`}
                className="bg-[#FF6A00] hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition"
              >
                {phone}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfusionSection;
