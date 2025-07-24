// components/InsuranceSection.jsx
import React from "react";
import Image from "next/image";

const InsuranceSection = ({
  title,
  subtitle,
  benefits,
  quotes,
  imageSrc,
}) => {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-xl px-4 md:px-20 py-10">
      {/* Top Section */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 leading-snug">
            {title}
          </h2>
          <p className="text-gray-600">{subtitle}</p>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-blue-300 hover:shadow-lg transition"
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  className="h-12 mx-auto mb-3"
                />
                <h3 className="text-center text-blue-800 font-medium">
                  {item.label}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Family Image */}
        <div className="relative lg:w-1/2 w-full">
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <Image
              src={imageSrc}
              alt="Visual"
              className="w-full h-auto max-h-[400px] object-cover"
              width={800}
              height={600}
              priority
            />
          </div>
        </div>
      </div>

      {/* Quotes Section */}
      <div className="mt-10 grid md:grid-cols-2 gap-8">
        {quotes.map((quote, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-xl shadow border-l-4 border-blue-400"
          >
            <p className="text-gray-700 italic text-lg">❝ {quote} ❞</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceSection;
