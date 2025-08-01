import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const upernavitems = [
  { label: "contact@moneybugs.in", Icon: MdEmail, link: "mailto:contact@moneybugs.in" },
  {
    label: "119 Vidya Nagar, Bhopal, Madhya Pradesh 462026",
    Icon: FaLocationDot,
    link: null, // No link for address
  },
  { label: "+91 97550 40311", Icon: FaPhoneAlt, link: "tel:+919755040311" },
];

const Detailes = ({ flexf = '', textsi = '' }) => {
  return (
    <div className={`flex gap-3 ${flexf} text-white ${textsi}`}>
      {upernavitems.map((item, ind) => (
        <div key={ind} className="flex gap-1 items-center">
          <item.Icon className="w-4 h-4 text-white" />
          {item.link ? (
            <a href={item.link} className="font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          ) : (
            <span className="font-semibold">{item.label}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Detailes;
