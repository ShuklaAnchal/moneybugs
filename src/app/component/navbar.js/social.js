import React from 'react'
import Link from 'next/link'

import { FaTwitter, FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa6"

const socialIcons = [
  { Icon: FaTwitter, alt: "Twitter", link: "/" },
  { Icon: FaFacebook, alt: "Facebook", link: "/" },
  { Icon: FaInstagram, alt: "Instagram", link: "/" },
  { Icon: FaPinterest, alt: "Pinterest", link: "/" }
]

const Social = ({iconcolor}) => {
  return (
    <div className="flex gap-6">
      {socialIcons.map((item, index) => {
        const IconComponent = item.Icon
        return (
          <Link key={index} href={item.link} aria-label={item.alt}>
            <IconComponent className={`w-5 h-5 ${iconcolor} hover:text-blue-600 transition`} />
          </Link>
        )
      })}
    </div>
  )
}

export default Social
