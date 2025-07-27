// import React from 'react';

// const Carddata = [
//   { title: "Claim Support", number: "9201167491", para: "Get hassle-free claim support with expert assistance" },
//   { title: "Sales & Enquiry", number: "9201167491", para: "Get in touch with our experts for personalized guidance" },
//   { title: "Renewal", number: "9039267749", para: "Easily renew your policy with seamless processing, timely reminders" },
//   { title: "Free Consultation", number: "9755040311", para: "Whatsapp + Call" }
// ];

// const ClaimCard = () => {
//   return (
//     <div className="lg:container md:container mx-auto px-3 mb-16 ">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {Carddata.map((item, index) => (
//           <div
//             key={index}
//             className="bg-primary text-white rounded-tr-[40px] rounded-bl-[40px] py-6 px-5 flex flex-col h-full shadow-md hover:shadow-lg transition duration-300"
//           >
//             <h3 className="text-lg md:text-xl font-bold ">{item.title}</h3>
//             <h4 className="text-base md:text-lg font-semibold ">{item.number}</h4>
//             <p className="text-sm md:text-base">{item.para}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ClaimCard;

"use client";
import React from "react";
import {
  FaClipboardList,
  FaPercent,
  FaShieldAlt,
  FaHome,
} from "react-icons/fa";

const features = [
  {
    icon: <FaClipboardList className="text-white text-2xl" />,
    title: "Claim Support",
    number: "9201167491",
    para: "Get hassle-free claim support with expert assistance",
  },
  {
    icon: <FaPercent className="text-white text-2xl" />,
    title: "Claim Support",
    number: "9201167491",
    para: "Get hassle-free claim support with expert assistance",
  },
  {
    icon: <FaShieldAlt className="text-white text-2xl" />,
    title: "Claim Support",
    number: "9201167491",
    para: "Get hassle-free claim support with expert assistance",
  },
  {
    icon: <FaHome className="text-white text-2xl" />,
    title: "Claim Support",
    number: "9201167491",
    para: "Get hassle-free claim support with expert assistance",
  },
];

const FeatureGrid = () => {
  return (
    <section className="bg-white px-4 md:px-10 text-center">
      {/* Optional Top Text */}
      <p className="text-gray-500 max-w-3xl mx-auto mb-10 text-[15px]">
        Explore the standout features of our insurance plans, designed to
        comprehensive protection, flexible options, and exceptional service
      </p>

      {/* Feature Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center space-y-1 text-center"
          >
            <div className="bg-[#0EB09E] rounded-full p-3 w-[70px] h-[70px] flex items-center justify-center shadow-md">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 max-w-[240px]">
              {feature.number}
            </p>
            <p className="text-sm text-gray-600 max-w-[240px]">
              {feature.para}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
