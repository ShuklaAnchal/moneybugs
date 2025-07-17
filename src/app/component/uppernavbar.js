"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; 
import { IoIosArrowForward, IoIosArrowDown  } from "react-icons/io";
import { MdEmail  } from "react-icons/md";


import { FaPhoneAlt } from "react-icons/fa";

import Logo from "@/icons/logo.png";
import Search from "@/icons/uppernav/search.svg";
import Social from "@/app/component/navbar.js/social"

const navItems = [
  { label: "Demos", href: "/demos" },
  {
    label: "Pages",
    dropdown: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Team", href: "/team" },
    ],
  },
  {
    label: "Insurance",
    dropdown: [
      { label: "Life Insurance", href: "/insurance/life" },
      { label: "Health Insurance", href: "/insurance/health" },
    ],
  },
  {
    label: "Shop",
    dropdown: [
      { label: "Products", href: "/shop/products" },
      { label: "Cart", href: "/shop/cart" },
      { label: "Checkout", href: "/shop/checkout" },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contactUs" },
];

const UpperNavbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
const [showSidebar, setShowSidebar] = useState(false);

const handleOpenMenu = () => {
  setIsMobileMenuOpen(true);
  setTimeout(() => {
    setShowSidebar(true);
  }, 400); // Delay sidebar for animation
};

const handleCloseMenu = () => {
  setShowSidebar(false);
  setTimeout(() => {
    setIsMobileMenuOpen(false);
  }, 200);
};
  return (
    <div className="shadow relative z-50">
      <div className="lg:container px-3">
        <div className="h-[110px] flex justify-between items-center">
          {/* Logo */}
          <div className="h-[51px] w-[142px]">
            <Image src={Logo} alt="MoneyBugs Logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex text-[18px] gap-12 font-normal text-[#797979] relative">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {item.href ? (
                  <Link href={item.href} className="cursor-pointer">
                    {item.label}
                  </Link>
                ) : (
                  <div className="cursor-pointer">{item.label}</div>
                )}

                {/* Dropdown */}
                {item.dropdown && hoveredIndex === index && (
                  <div className="absolute bg-white top-[70px] left-0 w-48 border rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform transition-all duration-300 translate-y-2 z-50">
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block px-6 py-3 hover:bg-gray-100 text-sm"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Hamburger Button (Mobile Only) */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <FiMenu onClick={handleOpenMenu} className="hover:text-primary" />
          </button>
          {/* Right Buttons (hidden on small screens) */}
          <div className="hidden md:flex gap-2 items-center">
            <div className="h-10 w-10 flex items-center justify-center">
              <Image src={Search} alt="Search" />
            </div>
            <button className="bg-primary px-[40px] py-[16px] rounded-full text-white text-[13px] font-semibold hover:bg-black transition">
              GET A QUOTE
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {/* Overlay and Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[999]">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm w-auto"
             onClick={handleCloseMenu}
          ></div>

          {/* Sidebar */}
          <div className="cursor-pointer absolute top-0 left-0 h-full w-[300px] bg-black text-white shadow-lg p-4 overflow-y-auto transition-transform duration-300 ease-in-out">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-white/20 pb-8 mt-3">
              <div className="w-[140px]">
                <Image src={Logo} alt="Logo" />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl text-white"
              >
                <FiX />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col text-[14px]">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex justify-between items-center py-2 border-b border-white/10"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="border-b border-white/10">
                      {/* Clickable Dropdown Header */}
                      <div
                        onClick={() =>
                          setOpenDropdownIndex(
                            openDropdownIndex === index ? null : index
                          )
                        }
                        className="flex justify-between items-center py-2 cursor-pointer"
                      >
                        <span>{item.label}</span>
                    <span className="text-xl font-bold">
      {openDropdownIndex === index ? (
        <IoIosArrowDown className="text-primary bg-white p-2 w-7 h-7 shadow-md" />
      ) : (
        <IoIosArrowForward className="text-white bg-primary p-2 w-7 h-7 shadow-md" />
      )}
    </span>
                      </div>

                      {/* Dropdown Items */}
                      {item.dropdown && openDropdownIndex === index && (
                        <div className="pl-4 pb-2 text-[14px] text-gray-300 ">
                          {item.dropdown.map((subItem, subIdx) => (
                            <Link
                              key={subIdx}
                              href={subItem.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Contact Info */}
              <div className="mt-6 border-t border-white/10 pt-4 text-sm space-y-3">
                <p className="flex items-center gap-2"><MdEmail className="text-white bg-primary rounded-full p-2 w-8 h-8 shadow-md text-bold" /> needhelp@insur.com</p>
                <p className="flex items-center gap-2"><FaPhoneAlt className="text-white bg-primary rounded-full p-2 w-8 h-8 shadow-md text-bold" /> 666 888 0000</p>
                <div className="flex gap-4 mt-3">
                 <Social />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpperNavbar;
