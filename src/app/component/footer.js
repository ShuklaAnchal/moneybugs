import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/icons/logo.png";

import Social from "@/app/component/navbar.js/social";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#191c1E] px-4 sm:px-6 md:px-10 lg:px-[117px] py-10">
      <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-12 lg:gap-4">
        {/* Logo + Text + Button */}
        <div className="flex flex-col gap-6 max-w-sm">
          <Image src={Logo} alt="Logo" />
          <p className="text-sm text-texthearder">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt.
          </p>
          <button className="bg-primary w-44 py-3 rounded-full text-white text-sm font-semibold hover:bg-white hover:text-primary transition">
            GET A QUOTE
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-white">Links</h3>
          <div className="flex flex-col text-base text-texthearder gap-2">
            <Link href="#">About</Link>
            <Link href="#">Insurance</Link>
            <Link href="#">Latest Portfolio</Link>
            <Link href="#">Our Faqs</Link>
            <Link href="#">Get in Touch</Link>
          </div>
        </div>

        {/* Latest News */}
        <div className="flex flex-col gap-4 max-w-sm">
          <h3 className="text-lg font-bold text-white">Latest News</h3>
          <div className="flex gap-3">
            <div className="h-16 w-16 bg-blue-500 overflow-hidden rounded">
              <img
                className="object-cover h-full w-full"
                src="https://images.unsplash.com/photo-1750969393822-36e48a31895f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="News"
              />
            </div>
            <div className="flex flex-col text-sm">
              <span className="text-primary">20 Jan, 2023</span>
              <span className="text-white font-bold">
                Our Insurance Strategy for Large Business
              </span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-black p-6 rounded-xl flex flex-col gap-6 max-w-sm">
          <h3 className="text-lg font-bold text-white">Contact</h3>
          <div className="flex flex-col gap-4 text-sm text-texthearder">
            <div className="flex items-center gap-2">
              <FaSquarePhone className="text-primary h-5 w-5" />
              888 999 0000
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-primary h-5 w-5" />
              needhelp@insur.com
            </div>
            <div className="flex items-start gap-2">
              <IoLocationSharp className="text-primary h-5 w-5" />
              <span>30 road, broklyn street new york 600</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-texthearder">
        <div>© All Copyright MoneyBugs</div>
        <Social />
      </div>
    </div>
  );
};

export default Footer;
