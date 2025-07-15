import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import Pintrest from "@/icons/uppernav/pinterest.svg";
import Facebook from "@/icons/uppernav/facebook.svg";
import Twitter from "@/icons/uppernav/twitter.svg";
import Instagram from "@/icons/uppernav/instagram.svg";
import Detailes from "@/app/component/navbar.js/detailes"



const SocialIcon =[
  {Icon: Twitter  , imagalt:"Twitter", link:"/"},
  {Icon: Facebook , imagalt:"Facebook", link:"/"},
  {Icon: Pintrest , imagalt:"Pintrest", link:"/"},
  {Icon: Instagram , imagalt:"Instagram", link:"/"}
]

const social = () => {
  return (
  <div className="flex gap-6">
    {SocialIcon.map((item, ind) => (
    <div key={ind}>
     <Link  href={item.link}>
     <Image src={item.Icon}  alt={item.imagalt}  className="w-5 h-5" />
     </Link>
    </div>
    ))
    }
  </div>
  )
}

export default social