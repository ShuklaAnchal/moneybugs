import React from 'react'
import Image from 'next/image';

import EmailIcon from "@/icons/uppernav/email.svg";
import PhoneIcon from "@/icons/uppernav/phone.svg";
import mapIcon from "@/icons/uppernav/map.svg";


const upernavitems = [
  { label: "needhelp@company.com", Icons: EmailIcon, imagalt: "EmailIcon" },
  {
    label: "30 Broklyn Golden Street. New York ",
    Icons: mapIcon,
    imagalt: "mapIcon",
  },
  { label: "+88 ( 9800 ) 6802", Icons: PhoneIcon, imagalt: "PhoneIcon" },
];

const detailes = ({flexf, textsi}) => {
  return (
    <div className={`flex gap-3 ${flexf} text-[#84898c] ${textsi}`}>
     {upernavitems.map((item, ind) => (
          <div key={ind} className="flex gap-1 items-center">
            <div>
              <Image src={item.Icons} alt={item.imagalt} className="h-4 w-4" />
            </div>
            <div>{item.label}</div>
          </div>
        ))}
 </div>
  )
}

export default detailes