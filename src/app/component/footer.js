import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/icons/footerlogo.png";
import Social from "@/app/component/navbar.js/social";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  const navLinks = [
    { label: "Health Insurance", href: "/health-insurance" },
    { label: "Motor Insurance", href: "/motor-insurance" },
    { label: "Term Insurance", href: "/term-insurance" },
    { label: "SIP and Mutual Fund", href: "/sip-and-mutual-fund" },
    { label: "Travel Insurance", href: "/travel-insurance" },
    { label: "Child Saving Plan", href: "/child-saving-plan" },
  ];

  return (
    <div className="bg-[#191c1E] px-4 sm:px-6 md:px-10 lg:px-[117px] py-10 z-30">
      <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-12 lg:gap-4">
        {/* Logo + Text + Button */}
        <div className="flex flex-col gap-6 max-w-sm">
          <Image src={Logo} alt="Logo" className="h-[80px] w-[180px]" />
          <p className="text-sm text-texthearder w-[75%]">
            MoneyBugs is a one-stop that offer customers a wide range of Risk
            management and Investment solution products under one roof.
          </p>
       <Link href="/contactUs">   <button className="bgclo1 w-44 py-3 rounded-full text-white text-sm font-semibold  transition">
            GET A QUOTE
          </button></Link>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-white">Links</h3>
          <div className="flex flex-col text-base text-texthearder gap-2">
            <Link href="/">Home</Link>
            <Link href="/about-page">About Us</Link>
            <Link href="#">Blogs</Link>
            <Link href="/contactUs">Contact Us</Link>
          </div>
        </div>

        {/* Latest News */}
        <div className="flex flex-col gap-4 max-w-sm">
          <h3 className="text-lg font-bold text-white">Solutions</h3>
          <div className="flex flex-col text-base text-texthearder gap-3">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-black p-6 rounded-xl flex flex-col gap-6 max-w-sm">
          <h3 className="text-lg font-bold text-white">Contact</h3>
          <div className="flex flex-col gap-4 text-sm text-texthearder">
            <div className="flex items-center gap-2">
              <FaSquarePhone className="text-white h-5 w-5" />
             +91 97550 40311
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-white h-5 w-5" />
              contact@moneybugs.in
            </div>
          <div className="flex items-start gap-2">
     <div> <IoLocationSharp className="text-white h-5 w-5 mt-1" /></div>
    <div>
              ll, office 4th floor, 119 36-A, Narmadapuram Rd, behind Royal Enfield Showroom, Vidya Nagar, Bhopal, Madhya Pradesh 462026

    </div>
    </div>
          </div>
        </div>
      </div>
      <div className="w-full flex lg:flex-row md:flex-row flex-col text-textsecondry lg:gap-14 md:gap-12 gap-2 font-bold justify-center mt-12">
        <Link href="/privacy-policy">
          {" "}
          <h1>Privacy Policy</h1>
        </Link>
        <Link href="/disclaimer">
          {" "}
          <h1>Disclaimer</h1>
        </Link>
        <Link href="/terms-and-conditions">
          {" "}
          <h1>Terms & Conditions</h1>
        </Link>
      </div>
      {/* Bottom Footer */}
      <div className="pt-6 mt-4 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-texthearder">
        <div>© All Copyright MoneyBugs</div>
        <Social iconcolor={"text-white"} />
      </div>
    </div>
  );
};

export default Footer;
