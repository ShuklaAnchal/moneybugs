import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const upernavitems = [
  { label: "contact@moneybugs.in", Icon: MdEmail },
  {
    label: "119 Vidya Nagar, Bhopal, Madhya Pradesh 462026",
    Icon: FaLocationDot,
  },
  { label: "+91 97550 40311", Icon: FaPhoneAlt },
];

const Detailes = ({ flexf = '', textsi = '' }) => {
  return (
    <div className={`flex gap-3 ${flexf} text-[#84898c] ${textsi}`}>
      {upernavitems.map((item, ind) => (
        <div key={ind} className="flex gap-1 items-center">
          <item.Icon className="w-4 h-4 text-white" />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Detailes;
